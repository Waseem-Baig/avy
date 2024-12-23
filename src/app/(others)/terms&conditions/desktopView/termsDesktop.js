import React from "react";

const TermsD = () => {
  return (
    <div className="flex justify-center pl-[5vw] pr-[5vw] mb-[15vh]">
      <div className="bg-[#EEF5FC] relative w-[87vw] h-auto shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC04D,inset_-10px_-10px_10px_#AEAEC040,inset_10px_10px_10px_#FFFFFF] rounded-xl flex flex-col py-4 px-32 pb-[5vh]">
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[4vh] text-[2rem]">
          Terms & Conditions
        </h1>

        {/* Prohibited Uses Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">Prohibited Uses</h2>
          <p className="px-4">
            <strong>
              Users are strictly prohibited from utilizing the product or its
              associated services for any of the following purposes:
            </strong>
          </p>
          <ul className="list-disc list-inside">
            <li className="ml-4">
              <strong>Unauthorized Tracking:</strong> Tracking individuals
              without their explicit consent, unless authorized by applicable
              law (e.g., parents tracking minor children).
            </li>
            <li className="ml-4">
              <strong>Illegal Activities:</strong> Using the tracker for
              stalking, harassment, theft, or any other criminal activity.
            </li>
            <li className="ml-4">
              <strong>Privacy Violations:</strong> Accessing or disclosing
              personal data of third parties without their consent.
            </li>
            <li className="ml-4">
              <strong>Tampering:</strong> Modifying or reverse-engineering the
              product to bypass its intended functionality or security features.
            </li>
          </ul>
        </section>

        {/* Compliance with Laws Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">Compliance with Laws</h2>
          <p className="px-4">
            <strong></strong>
          </p>
          <ul className="list-disc list-inside px-8">
            <li>
              Users must comply with all applicable local, national, and
              international laws and regulations regarding the use of tracking
              devices and data collection.
            </li>
            <li>
              It is the user&apos;s responsibility to understand and adhere to
              these laws in their respective jurisdiction.
            </li>
          </ul>
        </section>

        {/* User Responsibility Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">User Responsibility</h2>
          <ul className="list-disc list-inside px-8">
            <li>
              The user assumes full responsibility for any misuse of the
              product.
            </li>
            <li>
              <strong>Disclaimer of Liability:</strong> The company is not
              responsible for any illegal actions or misuse of the product by
              the user. All legal consequences arising from such activities are
              solely the user&apos;s responsibility.
            </li>
          </ul>
        </section>

        {/* Reporting Misuse Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">Reporting Misuse</h2>
          <ul className="list-disc list-inside px-8">
            <li>
              Any detected misuse of the product may result in immediate account
              suspension or termination.
            </li>
            <li>
              The company reserves the right to report such activities to
              relevant authorities and provide evidence for investigation.
            </li>
          </ul>
        </section>

        {/* Company Intent and Responsibility Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">
            Company Intent and Responsibility
          </h2>
          <ul className="list-disc list-inside px-8">
            <li>
              The company&apos;s primary intention is to provide enhanced safety
              and security to end users through the use of the product.
            </li>
            <li>
              <strong>Limitation of Liability for Misuse or Incidents:</strong>
              The company is not liable for any misuse of the product, or for
              any incidents, accidents, or negative outcomes resulting from the
              use of the product.
            </li>
            <li>
              Users are encouraged to use the product responsibly, and the
              company disclaims any responsibility for actions that lead to harm
              or damage, whether due to misuse or unforeseen events.
            </li>
          </ul>
        </section>

        {/* Limitation of Liability Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">Limitation of Liability</h2>
          <ul className="list-disc list-inside px-8">
            <li>
              {" "}
              The company disclaims all liability for damages or consequences
              arising from the misuse or unauthorized usage of the product.
            </li>
            <li>
              The user agrees to indemnify and hold the company harmless against
              claims or damages resulting from violations of these terms.
            </li>
          </ul>
        </section>

        {/* Enforcement and Monitoring Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-xl">Enforcement and Monitoring</h2>
          <ul className="list-disc list-inside px-8">
            <li>
              The company may monitor product usage to ensure compliance with
              these terms, subject to privacy regulations:
            </li>
            <li>
              Violators may face penalties, including permanent banning from the
              platform and legal action.
            </li>
          </ul>
        </section>

        {/* Acknowledgment Section */}
        <section className="space-y-2 text-[#002E5B] mb-6">
          <h2 className="font-semibold text-2xl">Acknowledgment</h2>
          <p className="px-4">
            By using this product, the user acknowledges the following:
          </p>
          <ul className="list-disc list-inside px-8">
            <li>
              They have read, understood, and agreed to these terms and
              conditions.
            </li>
            <li>
              The company&apos;s intention is solely to provide better safety
              and security through the use of its product.
            </li>
            <li>
              The company is not responsible for any misuse or illegal
              activities carried out by the user, nor for any incidents,
              accidents, or negative consequences arising from the use of the
              product.
            </li>
            <li>
              Any violation of these terms may lead to immediate termination of
              service and potential legal consequences.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsD;
