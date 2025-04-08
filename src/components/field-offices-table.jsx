import React from 'react';

export default function FieldOfficesTable() {
  const fieldOffices = [
    {
      id: 1,
      title: "Mahagenco Field offices Executive Director",
      officials: [
        {
          name: "Shri. Pankaj Sapate",
          designation: "Executive Director (O&M-II)",
          address: "",
          phone: "P : 0712 - 2591234",
          fax: "F :",
          email: "edom2@mahagenco.in",
        },
        {
          name: "Shri. Vivek Rokde",
          designation: "Executive Director (Project)Generation Construction Office, Koradi",
          address: "",
          phone: "P :07109 – 262126",
          office: "O : 07109 – 262155 / 74 / 81",
          fax: "F : 07109 – 262162",
          email: "edgp2koradi@mahagenco.in",
        },
      ],
    },
    {
      id: 2,
      title: "Mahagenco - Field offices Chief Engineer (Gen O&M, Gen. Const., & Civil)",
      locations: [
        {
          name: "KORADI TPS(660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR. PIN-441111",
          officials: [
            {
              name: "Vilas Motghare",
              designation: "CE. (Koradi TPS)",
              address: "KORADI TPS(660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR. PIN-441111",
              phone: "07109-262141-46 262106/09 Ext:1001/6001",
              fax: "--",
              email: "cegenkoradi@mahagenco.in",
            },
          ],
        },
        {
          name: "KORADI COMPLEX, CHINDWARA ROAD, KORADI-441111",
          officials: [
            {
              name: "Vivek Rokade",
              designation: "CE. (Koradi Proj.)",
              address: "KORADI COMPLEX, CHINDWARA ROAD, KORADI-441111",
              phone: "07109-264862/69 Ext:1504",
              fax: "-",
              email: "cgmkrdproj@mahagenco.in",
            },
          ],
        },
        {
          name: "KORADI TRANINING CENTER KORADI TPS PREMISES NAGPUR. PIN -441111",
          officials: [
            {
              name: "Sunil Sonpethkar",
              designation: "CE. (TRD) Koradi",
              address: "KORADI TRANINING CENTER KORADI TPS PREMISES NAGPUR. PIN -441111",
              phone: "07109-263850/262737",
              fax: "Fax: 07109-262167",
              email: "cgmktc@mahagenco.in ktc@mahagenco.in",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-8">
      {fieldOffices.map((office) => (
        <div key={office.id} className="mb-8">
          <div className="bg-white border border-gray-200 rounded-md">
            <div className="flex justify-between items-center p-4 cursor-pointer">
              <h3 className="text-lg font-medium">{office.title}</h3>
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {office.officials && (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {office.officials.map((official, index) => (
                  <div key={index} className="border p-4 rounded-md">
                    <h4 className="text-lg font-bold mb-2">{official.name}</h4>
                    <p className="mb-2">{official.designation}</p>
                    <div className="space-y-1 text-sm">
                      <p>{official.phone}</p>
                      {official.office && <p>{official.office}</p>}
                      <p>{official.fax}</p>
                      <p>@ : {official.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {office.locations && (
              <div>
                {office.locations.map((location, locIndex) => (
                  <div key={locIndex}>
                    <div className="bg-blue-100 p-3 text-center font-medium">{location.name}</div>
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2 text-left">Name</th>
                          <th className="border px-4 py-2 text-left">DESIGNATION</th>
                          <th className="border px-4 py-2 text-left">ADDRESS</th>
                          <th className="border px-4 py-2 text-left">Office Ph.No.</th>
                          <th className="border px-4 py-2 text-left">FAX</th>
                          <th className="border px-4 py-2 text-left">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {location.officials.map((official, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="border px-4 py-2">{official.name}</td>
                            <td className="border px-4 py-2">{official.designation}</td>
                            <td className="border px-4 py-2">{official.address}</td>
                            <td className="border px-4 py-2">{official.phone}</td>
                            <td className="border px-4 py-2">{official.fax}</td>
                            <td className="border px-4 py-2">{official.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
