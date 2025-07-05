import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - The Tech Ledger',
  description: 'Read the terms and conditions for using The Tech Ledger website and services.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: July 05, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to The Tech Ledger. These Terms of Service ("Terms") govern your use of our website located at https://thetechledger.github.io/ (the "Service") operated by The Tech Ledger.
            </p>
            
            <p className="text-gray-700 mb-8">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on The Tech Ledger's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="text-gray-700">modify or copy the materials;</li>
              <li className="text-gray-700">use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
              <li className="text-gray-700">attempt to decompile or reverse engineer any software contained on The Tech Ledger's website;</li>
              <li className="text-gray-700">remove any copyright or other proprietary notations from the materials; or</li>
              <li className="text-gray-700">transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Tech Ledger at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on The Tech Ledger's website are provided on an 'as is' basis. The Tech Ledger makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-700 mb-6">
              Further, The Tech Ledger does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall The Tech Ledger or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Tech Ledger's website, even if The Tech Ledger or a The Tech Ledger authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on The Tech Ledger's website could include technical, typographical, or photographic errors. The Tech Ledger does not warrant that any of the materials on its website are accurate, complete or current. The Tech Ledger may make changes to the materials contained on its website at any time without notice. However, The Tech Ledger does not make any commitment to update the materials.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Links</h2>
            <p className="text-gray-700 mb-6">
              The Tech Ledger has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Tech Ledger of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Modifications</h2>
            <p className="text-gray-700 mb-6">
              The Tech Ledger may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. User Content</h2>
            <p className="text-gray-700 mb-4">
              By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any content you submit, post or display on or through the Service and you are responsible for protecting those rights.
            </p>
            <p className="text-gray-700 mb-6">
              You represent and warrant that: (i) the content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of The Tech Ledger and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-700">
                By email: <a href="mailto:josephrasanjana0@gmail.com" className="text-blue-600 hover:text-blue-800 underline">josephrasanjana0@gmail.com</a>
              </li>
              <li className="text-gray-700">
                By visiting this page on our website: <a href="https://thetechledger.github.io/contact" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://thetechledger.github.io/contact</a>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> These Terms of Service are effective as of July 05, 2025 and will remain in effect except with respect to any changes in their provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 