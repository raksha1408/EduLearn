
 // @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "../assets/styles/WhatsAppWeget.css";
import logo from '../assets/images/logo.png'


const WhatsAppWeget = () => {
    return (
<WhatsAppWidget
			phoneNo="+919973893644"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="50"
			iconColor="white"
			iconBgColor="#39ac31"
			headerIcon={logo}
			headerIconColor="red"
			headerTxtColor="#fff"
			headerBgColor="#111827"
			headerTitle="EduLearn"
			headerCaption="Online"
			bodyBgColor="#4b6385"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /> How can I help you?</>}
			footerBgColor="#111827"
			placeholder="Type a message.."
			btnBgColor="#22C55E"
			btnTxt="Let's Chat"
			btnTxtColor="white"
			
		/>
    );
};

export default WhatsAppWeget;