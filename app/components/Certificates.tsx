import { Console } from "./Console";
import { CodeComment } from "./CodeComment";
import { Line } from "./Line";
import { CertificatesCarousel } from "./CertificatesCarousel";

export const Certificates = () => {
  return (
    <section id="certificates" className="mt-10">
      <CodeComment>Certificates</CodeComment>
      <Console folder="~/hero/certificates $" />

      <div className="mt-10">
        <CertificatesCarousel />
      </div>

      <div className="mt-10">
        <Line />
      </div>
    </section>
  );
};
