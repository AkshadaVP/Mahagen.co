// src/components/field-offices-table.jsx
import React from 'react';

export default function FieldOfficesTable() {
  return (
    <div className="space-y-8">
      {/* Executive Directors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Mahagenco Field offices Executive Director</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Card 1 */}
          <div className="flex-1 p-6 bg-white rounded shadow">
            <h3 className="font-bold">Shri. Pankaj Sapate</h3>
            <p className="mb-2 text-sm">Executive Director (O&amp;M‑II)</p>
            <p className="text-sm"><strong>P</strong> : —</p>
            <p className="text-sm"><strong>O</strong> : 0712‑2591234</p>
            <p className="text-sm"><strong>F</strong> : —</p>
            <p className="text-sm">
              <strong>@</strong> : edom2@mahagenco.in
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 p-6 bg-white rounded shadow">
            <h3 className="font-bold">Shri. Vivek Rokde</h3>
            <p className="mb-2 text-sm">
              Executive Director (Project) Generation Construction Office, Koradi
            </p>
            <p className="text-sm"><strong>P</strong> : 07109‑262126</p>
            <p className="text-sm">
              <strong>O</strong> : 07109‑262155 / 74 / 81
            </p>
            <p className="text-sm"><strong>F</strong> : 07109‑262162</p>
            <p className="text-sm">
              <strong>@</strong> : edgp2koradi@mahagenco.in
            </p>
          </div>
        </div>
      </section>

      {/* Chief Engineers Table */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Mahagenco - Field offices Chief Engineer (Gen O&amp;M, Gen. Const., &amp; Civil)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse table-auto">
            <thead>
              <tr className="text-white bg-black">
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Designation</th>
                <th className="px-3 py-2">Address</th>
                <th className="px-3 py-2">Office Ph.No.</th>
                <th className="px-3 py-2">FAX</th>
                <th className="px-3 py-2">E‑mail</th>
              </tr>
            </thead>
            <tbody>
              {/* Koradi TPS */}
              <tr className="font-semibold bg-blue-100">
                <td colSpan={6} className="px-3 py-2">
                  KORADI TPS (660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR – 441111
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">Vilas Motghare</td>
                <td className="px-3 py-2">CE. (Koradi TPS)</td>
                <td className="px-3 py-2">
                  KORADI TPS (660 MW),(210 MW) URJA BHAVAN, TAL KAMATHI, NAGPUR – 441111
                </td>
                <td className="px-3 py-2">
                  07109‑262141‑46<br/>
                  262106/09<br/>
                  Ext:1001/6001
                </td>
                <td className="px-3 py-2">–</td>
                <td className="px-3 py-2">cegenkoradi@mahagenco.in</td>
              </tr>

              {/* Koradi Complex */}
              <tr className="font-semibold bg-blue-100">
                <td colSpan={6} className="px-3 py-2">
                  KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">Vivek Rokade</td>
                <td className="px-3 py-2">CE. (Koradi Proj.)</td>
                <td className="px-3 py-2">KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111</td>
                <td className="px-3 py-2">
                  07109‑264862/69<br/>
                  Ext:1504
                </td>
                <td className="px-3 py-2">–</td>
                <td className="px-3 py-2">cgmkrdproj@mahagenco.in</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Vivek Rokade</td>
                <td className="px-3 py-2">CE. (Civil‑II Koradi) (Addl Work)</td>
                <td className="px-3 py-2">KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111</td>
                <td className="px-3 py-2">
                  07109‑262238168/262128
                </td>
                <td className="px-3 py-2">–</td>
                <td className="px-3 py-2">cegen217@rediffmail.com</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Sanjay Rahate</td>
                <td className="px-3 py-2">CE. (Const. Koradi)</td>
                <td className="px-3 py-2">KORADI COMPLEX, CHINDWARA ROAD, KORADI – 441111</td>
                <td className="px-3 py-2">
                  07109‑295701/295703 EXTn.201
                </td>
                <td className="px-3 py-2">–</td>
                <td className="px-3 py-2">cegckoradi@mahagenco.in</td>
              </tr>

              {/* Koradi Training */}
              <tr className="font-semibold bg-blue-100">
                <td colSpan={6} className="px-3 py-2">
                  KORADI TRAINING CENTER – KORADI TPS PREMISES, NAGPUR – 441111
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">Sunil Sonpethkar</td>
                <td className="px-3 py-2">CE. (TRD) Koradi</td>
                <td className="px-3 py-2">
                  KORADI TRAINING CENTER – KORADI TPS PREMISES, NAGPUR – 441111
                </td>
                <td className="px-3 py-2">07109‑263850/262737</td>
                <td className="px-3 py-2">
                  Fax: 07109‑262167
                </td>
                <td className="px-3 py-2">
                  cgmktc@mahagenco.in<br/>
                  ktc@mahagenco.in
                </td>
              </tr>

              {/* Chandrapur */}
              <tr className="font-semibold bg-blue-100">
                <td colSpan={6} className="px-3 py-2">
                  CSTPS, CHANDRAPUR URJABHAVAN, CHANDRAPUR – 442404
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">Vijay Rathod</td>
                <td className="px-3 py-2">CE. (Chandrapur STPS)</td>
                <td className="px-3 py-2">
                  CSTPS, CHANDRAPUR URJABHAVAN, CHANDRAPUR – 442404
                </td>
                <td className="px-3 py-2">
                  07172‑220014/220155‑59<br/>
                  Ext:4801/4901
                </td>
                <td className="px-3 py-2">
                  Fax: 07172‑220203
                </td>
                <td className="px-3 py-2">cegenchandrapur@mahagenco.in</td>
              </tr>

              {/* And so on for each station… */}
              {/* You would continue in the same pattern for Kharerkheda, Bhusawal, Paras, Parli, Nashik, Pophali, Uran, RE-P&P Pune/Nagpur */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
