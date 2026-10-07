// Universal Links: los enlaces kairoslat.com/c/… abren la app si está instalada.
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    applinks: {
      details: [
        {
          appIDs: ["G8AF57RDRF.lat.kairos.app"],
          components: [{ "/": "/c/*", comment: "Canales de iglesias" }],
        },
      ],
    },
  });
}
