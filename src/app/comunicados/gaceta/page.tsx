"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Document, Page, pdfjs } from "react-pdf";

// Configurar el worker de pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const BASE_PDF_URL = "https://serviciopagina.upea.bo/Gaceta/";

interface Gaceta {
  gaceta_id: number;
  gaceta_titulo: string;
  gaceta_fecha: string;
  gaceta_estado: number;
  gaceta_tipo: string | null;
  gaceta_documento: string;
}

function GacetaPage() {
  const [gacetas, setGacetas] = useState<Gaceta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Gaceta[]>(
          "https://serviciopagina.upea.bo/api/gacetaunivAll/32"
        );
        setGacetas(response.data);
      } catch (error) {
        setError(
          `Error: ${
            error instanceof Error
              ? error.message
              : "Ocurrió un error desconocido."
          }`
        );
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center my-80 text-red-500">{error}</p>;
  }

  return (
    <>
      <section className="max-w-screen-xl h-full mx-auto flex flex-col justify-center pt-24 px-4 md:px-6">
        <Header title="GACETAS">
          <FontAwesomeIcon icon={faFilePdf} className="text-red-600" />
        </Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {gacetas.map((item) => (
            <div
              key={item.gaceta_id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.gaceta_titulo}</h2>
                <p className="text-sm text-gray-600">
                  Fecha:{" "}
                  {new Date(item.gaceta_fecha).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="p-4 bg-gray-100">
                <PDFPreview
                  pdfUrl={`${BASE_PDF_URL}${item.gaceta_documento}`}
                />
                <a
                  href={`${BASE_PDF_URL}${item.gaceta_documento}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block text-center"
                >
                  Descargar PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Componente para mostrar la vista previa del PDF usando react-pdf
interface PDFPreviewProps {
  pdfUrl: string;
}

function PDFPreview({ pdfUrl }: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    setError("No se pudo cargar el PDF.");
    console.error(error);
    setLoading(false);
  }

  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-white">
      {loading && <p className="text-gray-500">Cargando PDF...</p>}
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <Document
          file={{ url: pdfUrl }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={1} width={600} />
        </Document>
      )}
    </div>
  );
}

export default GacetaPage;
