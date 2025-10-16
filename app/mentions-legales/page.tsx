"use client";

import BottomSeparator from "../components/BottomSeparator";
import ImageWithSeparators from "../components/ImageWithSeparators";

export default function MentionsLegalesPage() {
  return (
    <main>
      {/* Header avec image de fond */}
      <header className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url('/images/IMG_4419.jpg')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-white font-cookie mb-6" style={{ fontSize: '72px', lineHeight: '55px' }}>
            Mentions légales
          </h1>
          
          {/* Barre avec losange */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-2 h-2 bg-white transform rotate-45 mx-4"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>
        {/* Séparateur en bas du header */}
        <BottomSeparator color="#ffffff" overlay={true} />
      </header>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-[#262559] mb-8 font-cookie" style={{ fontSize: '60px', lineHeight: '50px' }}>
              Informations légales
            </h2>
            
            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              1. Présentation du site.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="http://localhost:3000" className="text-[#076993] hover:underline font-lora">http://localhost:3000</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              <strong className="font-lora">Propriétaire</strong> : crêperie crampous mad – SARL – 14 rue des tondeurs Mulhouse<br/>
              <strong className="font-lora">Créateur</strong> : Cyber Experts<br/>
              <strong className="font-lora">Responsable publication</strong> : Cyber Experts – contact@cyberexperts.io<br/>
              Le responsable publication est une personne physique ou une personne morale.<br/>
              <strong className="font-lora">Webmaster</strong> : Cyber Experts – contact@cyberexperts.io<br/>
              <strong className="font-lora">Hébergeur</strong> : Hostinger.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              2. Conditions générales d'utilisation du site et des services proposés.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              L'utilisation du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> sont donc invités à les consulter de manière régulière.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par crêperie crampous mad, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> est mis à jour régulièrement par Cyber Experts. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              3. Description des services fournis.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> a pour objet de fournir une information concernant l'ensemble des activités de la société.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              crêperie crampous mad s'efforce de fournir sur le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Tous les informations indiquées sur le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              4. Limitations contractuelles sur les données techniques.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site utilise la technologie JavaScript.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              5. Propriété intellectuelle et contrefaçons.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              crêperie crampous mad est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : crêperie crampous mad.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              6. Limitations de responsabilité.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              crêperie crampous mad ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              crêperie crampous mad ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. crêperie crampous mad se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, crêperie crampous mad se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              7. Gestion des données personnelles.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              A l'occasion de l'utilisation du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              En tout état de cause crêperie crampous mad ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> l'obligation ou non de fournir ces informations.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Aucune information personnelle de l'utilisateur du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de crêperie crampous mad et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a>.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles. .
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              8. Liens hypertextes et cookies.
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de crêperie crampous mad. Cependant, crêperie crampous mad n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              La navigation sur le site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies :
            </p>
            <p className="mb-2 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
            </p>
            <p className="mb-2 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.<br/>
              Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.
            </p>
            <p className="mb-2 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l'onglet « Confidentialité », vous pouvez bloquer les cookies.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              9. Droit applicable et attribution de juridiction.
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Tout litige en relation avec l'utilisation du site <a href="http://localhost:3000" className="text-[#076993] hover:underline">http://localhost:3000</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              10. Les principales lois concernées.
            </h3>
            <p className="mb-2 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
            </p>

            <h3 className="text-[#076993] mb-4 mt-8 font-cookie" style={{ fontSize: '45px', lineHeight: '50px' }}>
              11. Lexique.
            </h3>
            <p className="mb-2 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Utilisateur : Internaute se connectant, utilisant le site susnommé.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-lora" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </p>
          </div>
        </div>
      </section>

      {/* Image de fond avec séparateurs en haut et en bas */}
      <ImageWithSeparators 
        imageSrc="/images/table-ronde-restaurent.jpg"
        height="40vh"
        minHeight="300px"
        separatorColor="#ffffff"
      />
    </main>
  );
}