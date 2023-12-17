import React from 'react'
import Card from 'react-bootstrap/Card';
import img15 from '../../assets/images/img15.jpg'
import img10 from '../../assets/images/img10.jpg'
import img11 from '../../assets/images/img11.jpg'
import img12 from '../../assets/images/img12.jpg'
import img13 from '../../assets/images/img13.jpg'
import './Formation_pc_reseaux.css'
import { Button } from 'react-bootstrap';

export default function Formationtech_pc_réseaux() {
  return (
    <div>
        
        <Card className="bg-dark text-white">
      <Card.Img src={img15} height={600}  width={600} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1><span style={{backgroundColor:'white', color:'black'}}>Formation Technicien PC et Réseaux</span></h1></Card.Title>
        <Card.Text>
            <h3><span style={{backgroundColor:'white', color:'black'}}>Vous êtes passionné par les métiers techniques et les technologies ayant trait au monde de l’informatique ?Notre formation en maintenance informatique vous offre de nombreux débouchés dans ce secteur en forte croissance
            De la détection d’une panne informatique, en passant par la remise en état du matériel, le technicien de maintenance informatique se pose en véritable sauveur face à un écran noir ou à un virus détecté.La formation de technicien de maintenance informatique est accessible sans condition de diplôme.
            </span></h3>
        </Card.Text>
        <a className="btn btn-primary" style={{ textAlign:"center"}} href='/inscription' > S'inscrire <i className="fas fa-chevron-right"></i></a>
      </Card.ImgOverlay>
    </Card>
<div class="grid-contain">
          <div className='boxContainer d-flex'>
                <div className='progimg'>
                            <img src={img10} height={500} width={500} alt='image' className='img-fluid'/>
                </div>
          <div className='prog'> 
                <h1> <i class="fa-solid fa-file-lines" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'orange'}}>Contenu du cours support pc</span></h1>
                  
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Assemblage/Désassemblage d’un PC</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Le stockage des données</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les périphériques d’impression</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Le PC dans un contexte réseau</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les smartphones </p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les périphériques multimédia (graphique, son, CDROM, graveur)</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Configuration avancée</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les problèmes classiques et leurs solutions</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Stratégie de dépannage des PC </p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Problèmes logiciels sous Windows</p>
                      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Veille technologique</p>
                      </div>
    </div>      
    </div>

    <div class="grid-contain">
          <div className='boxContainer d-flex'>
          <div className='prog'> 
     <h1> <i class="fa-solid fa-file-lines" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'orange'}}>Contenu du cours réseau</span></h1>
       
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Contenu du cours réseau</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les différents réseaux et principes généraux</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Différentes alternatives de raccordement</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les différents équipements leurs rôles et leurs avantages respectifs</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Les réseaux locaux (LAN)</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Interconnexion par réseau grande distance (WAN)</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Réseaux sans fil – WiFi</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Notions de base des réseaux TCP/IP</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Routeurs : interconnecter les réseaux</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Sécurité réseau</p>
         <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Introduction à l’administration des réseaux</p>
         </div>
         <div className='progimg'>
                            <img src={img11} height={500} width={500} alt='image' className='img-fluid'/>
                </div>
    </div>      
    </div>

    <div class="grid-contain">
          <div className='boxContainer d-flex'>
                <div className='progimg'>
                            <img src={img12} height={500} width={500} alt='image' className='img-fluid'/>
                </div>
          <div className='prog'> 

        <h1><i class="fa-solid fa-network-wired" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'orange'}}>L’administration de Windows 10</span></h1>
       
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Concrètement, à l’issue de ce cours, vous serez capable de :</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Installer ou de migrer de Vista, Seven ou 8/8.1 vers Windows 10</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Déployer Windows 10</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Utiliser les nouvelles fonctionnalités de Windows 10</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Maîtriser le paramétrage technique de l’interface</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Configurer le réseau</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Gérer la sécurité de Windows 10</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Maîtriser les performances du démarrage du système</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Maîtriser les nouvelles possibilités de stockage (Cloud, images ISO ou VHD, …)</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Optimiser les performances et la disponibilité du système</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Sauvegarder et restaurer Windows 10</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Résoudre des problèmes réseaux, systèmes, matériels</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Méthodologie de résolution des problèmes</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre d’une maintenance proactive</p>
        </div>
    </div>      
    </div>  

    <div class="grid-contain">
          <div className='boxContainer d-flex'>
          <div className='prog'> 
        <h1><i class="fa-solid fa-network-wired" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'orange'}}>Administrateur Système Windows server</span></h1>
       
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>CInstallation et configuration de Microsoft Windows Server 2012 R2</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Introduction aux services de domaines Active Directory</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Gestion des objets des services de domaines Active Directory</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> UAutomatisation de l’administration des services de domaines Active Directory</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Utiliser les outils de ligne de commande</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Utiliser Windows PowerShell pour l’administration</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Réaliser des opérations en bloc avec Windows PowerShell</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre de IPv4</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre du DHCP</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre de DNS</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre de IPv6</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre du stockage local</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre des fichiers et des services d’impression</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre des stratégies de groupe</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Sécurisation des serveurs Windows à l’aide des objets de stratégies de groupe</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Mise en œuvre de la virtualisation serveur avec Hyper-V</p>
        </div>
        
        <div className='progimg'>
                            <img src={img13} height={500} width={500} alt='image' className='img-fluid'/>
                </div>
    </div>      
    </div> 

    <div class="grid-contain">
          <div className='boxContainer d-flex'>
                <div className='progimg'>
                            <img src={img10} height={500} width={500} alt='image' className='img-fluid'/>
                </div>
          <div className='prog'> 
        <h1><i class="fa-solid fa-network-wired" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'orange'}}>Linux administration Système</span></h1>
       
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Installation du système</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Distribution de logiciels</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> L’environnement graphique</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Gestion des utilisateurs</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> La sauvegarde</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> L’arrêt et le démarrage Disques et systèmes de fichiers sous Linux</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Les disques Linux</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Les systèmes de fichiers</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Présentation des stockages NAS et SAN</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Gestion des périphériques sous Linux</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Le réseau</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Commandes et applications</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> La sécurité au niveau du réseau (firewall)</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Serveur HTTP Apache</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Serveur de fichiers Samba</p>
        <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i> Serveur d’impression</p>
        </div>
    </div>      
    </div>     

        <div class="grid-container">
        <div>
        <i class="fa-solid fa-user" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'orange'}}>Pour qui ?</span></h3>
          Être demandeur (se) d’emploi inoccupé(e), inscrit(e) à Actiris et disponible à temps plein et avoir entre 18 et 24 ans.Si vous avez plus de 25 ans, la formation est payante  
        </div>
          
        <div>
        <i class="fa-regular fa-calendar-days" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'orange'}}>Horaires:</span></h3>
          <p>Lundi au vendredi 8h30 à 16h.</p>
        </div>
        
      <div>
      <i class="fa-solid fa-wand-magic-sparkles" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'orange'}}>Intéressé (e) ? Que faire ?</span></h3>
          <h5>Présentez-vous directement à notre adresse :</h5>
              <p>CFITECH</p>
              <p>Rue de l’EgLise Sainte-Anne 63</p>
              <p>1081 Koekelberg</p>
              <p>Tél:02 445 39 08</p>
              <p>L’inscription du :Lundi au vendredi</p>
              <p>Heure:9h à 16h</p>
       </div>


</div>
    </div>
    
  )
}