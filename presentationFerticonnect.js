    const text = `FertiConnect est une plateforme innovante 100% algérienne destinée pour toute personne souffrant de pathologies reproductives (SOPK, Endométriose, troubles du cycle,Troubles de l'érection...). Notre objectif est d'améliorer l'expérience des couples infertiles, d'augmenter leurs chances de succès et de leur offrir une meilleure qualité de vie.\nFertiConnect s'attaque à la complexité et au manque de prise en charge globale du parcours de reproduction en offrant une plateforme centralisée, une coordination efficace, un soutien personnalisé et des services accessibles.\n\n1. Manque de coordination et communication entre les différents acteurs clés de la santé reproductive\n2. "Manque d'accessibilité à l'information sur la santé reproductive"\n3. "Problèmes de suivi et de gestion du temps et des documents médicaux papier”\n4. "manque du soutien émotionnel”\n\nCe qui rend Le parcours de reproduction fragmenté et complexe, impliquant plusieurs spécialistes, cliniques et tests différents, ceci pourrait entraîner :\n- Des retards de diagnostic,\n- Des traitements inefficaces\n- Et une expérience frustrante pour les patients\n\nFertiConnect est une plateforme 100% algérienne en ligne multilingue qui offre un suivi complet et personnalisé a ses utilisateurs !\nNotre mission est de vous aider à Trouvez des cliniques et des spécialistes de la santé reproductive qualifiés dans votre région.\nGérez vos dossiers médicaux et vos rendez-vous en toute simplicité.\nAccédez à des informations fiables et à des ressources éducatives sur la santé reproductive en différentes langues.\nBénéficiez d'un soutien émotionnel et psychologique par le biais de forums, de groupes de discussion et de services de messagerie instantanée.\n\nAccédez à la plateforme depuis n'importe quel appareil connecté à internet, ordinateur, tablette ou Smartphone.\nOù vous allez vous retrouver dans un espace sur et anonyme où vous pouvez poser des questions et obtenir des conseils sans crainte de stigmatisation et sans jugement !\nAvec FertiConnect, vous avez accès à un réseau de professionnels de la santé reproductive qualifiés, à des informations fiables et à une communauté de soutien." Logo de FertiConnect`;

    const textContainer = document.getElementById('typed-text');
    const textBar = document.getElementById('text-bar');

    function typeWriter(text, i) {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          textContainer.innerHTML += '<br>';
        } else {
          textContainer.innerHTML += text.charAt(i);
        }
        textBar.style.width = textContainer.clientWidth + "px";
        i++;
        setTimeout(() => typeWriter(text, i), 10);
      }
    }

    typeWriter(text, 0);

