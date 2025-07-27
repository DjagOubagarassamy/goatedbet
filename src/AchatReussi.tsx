import React from 'react';

const AchatReussi = () => {
  // Récupère l'ID de session Stripe dans l'URL
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get('session_id');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Merci pour votre achat ! 🎉</h1>
      <p className="mb-8 text-lg">Votre paiement a bien été validé.<br />Vous pouvez télécharger votre formation ci-dessous :</p>
      {sessionId ? (
        <a
        href="/BettingGuide.pdf"
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
        download
      >
        Télécharger le PDF
      </a>
      ) : (
        <p className="text-red-400">Session de paiement introuvable.</p>
      )}
    </div>
  );
};

export default AchatReussi;
