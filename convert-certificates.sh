#!/usr/bin/env bash

set -euo pipefail

CERTIFICATES_DIR="public/certificates"
QUALITY=85
RESOLUTION=150

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "Помилка: pdftoppm не встановлено."
  echo "Встановлення: sudo apt install poppler-utils"
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Помилка: cwebp не встановлено."
  echo "Встановлення: sudo apt install webp"
  exit 1
fi

if [[ ! -d "$CERTIFICATES_DIR" ]]; then
  echo "Папку $CERTIFICATES_DIR не знайдено."
  exit 1
fi

found=false

while IFS= read -r -d '' pdf_file; do
  found=true

  filename="$(basename "$pdf_file" .pdf)"

  output_name="$(
    printf '%s' "$filename" |
      tr '[:upper:]_' '[:lower:]-' |
      sed \
        -e 's/[^a-z0-9-]/-/g' \
        -e 's/--*/-/g' \
        -e 's/^-//' \
        -e 's/-$//'
  )"

  output_file="$CERTIFICATES_DIR/$output_name.webp"
  temporary_prefix="$(mktemp -u "/tmp/certificate-XXXXXX")"
  temporary_png="$temporary_prefix.png"

  if [[ -f "$output_file" ]]; then
    echo "Пропущено: $output_file вже існує"
    continue
  fi

  echo "Конвертація: $(basename "$pdf_file")"

  pdftoppm \
    -f 1 \
    -singlefile \
    -png \
    -r "$RESOLUTION" \
    "$pdf_file" \
    "$temporary_prefix"

  cwebp \
    -quiet \
    -q "$QUALITY" \
    "$temporary_png" \
    -o "$output_file"

  rm "$temporary_png"

  echo "Створено: $output_file"
done < <(find "$CERTIFICATES_DIR" -maxdepth 1 -type f -iname "*.pdf" -print0)

if [[ "$found" == false ]]; then
  echo "У папці $CERTIFICATES_DIR немає PDF-файлів."
  exit 0
fi

echo "Усі сертифікати конвертовано."