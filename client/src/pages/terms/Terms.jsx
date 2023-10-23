import React, { useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./Terms.module.css";

const Terms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.subcontainer}>
				<div className={styles.mainhead}>Terms And Conditions</div>
				<div className={styles.para}>This website is operated by Petaluxe. Throughout the site, the terms “we”, “us” and “our” refer to Petaluxe. Petaluxe offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</div>
				<div className={styles.para}>Petaluxe provides the content and services available on this website to you subject to the following Terms and Conditions, our Privacy Policy, Payment Policy and other terms and conditions and policies which you may find throughout our website in connection with certain functionality, features or promotions as well as customer service, all of which are deemed a part of and included within these terms and conditions (collectively, “Terms and Conditions”). By accessing or using this website, you are acknowledging that you have read, understood, and agree, without limitation or qualification, to be bound by these Terms and Conditions in this Agreement, so please read this carefully before proceeding.</div>
				<div className={styles.head}>Privacy</div>
				<div className={styles.subpara}>Please review our privacy-policy so that you may understand our privacy practices.</div>
				<div className={styles.head}>Payment Policy</div>
				<div className={styles.subpara}>Please see our Payment Policy to understand the purchase processes of our products.</div>
				<div className={styles.para}>All international shipping orders may attract local duties applicable in that country and accordingly the customer will have to pay such local duties/taxes.</div>
				<div className={styles.head}>Products and Services for Personal Use</div>
				<div className={styles.subpara}>The products and services described on this website, and any samples thereof we may provide to you, are for personal use only. You may not sell or resell any of the products or services, or samples thereof, you receive from us. We reserve the right, with or without notice, to cancel or reduce the quantity of any products or services to be provided to you that we believe, in our sole discretion, may result in the violation of our Terms and Conditions.</div>
				<div className={styles.head}>Accuracy of Information</div>
				<div className={styles.subpara}>We attempt to be as accurate as possible when describing our products on the website. However, except to the extent implied by applicable law, we do not warrant that the product descriptions, colours, information or other content available on the website are accurate, complete, reliable, current, or error-free.</div>
				<div className={styles.head}>Intellectual Property</div>
				<div className={styles.subpara}>All information and content available on the website and its “look and feel”, including but not limited to trademarks, logos, service marks, text, graphics, logos, button icons, images, audio clips,data compilations and software, and the compilation and organization thereof (collectively, the “Content”) is the property of Petaluxe, our Affiliates, partners or licensors, and is protected by laws of India, including laws governing all applicable forms of intellectual property.</div>
				<div className={styles.subpara}>Except as set forth in the limited licenses in Section 6, or as required under applicable law, neither the Content nor any portion of this website may be used, reproduced, duplicated, copied, sold, resold, accessed, modified, or otherwise exploited, in whole or in part, for any purpose without our express, prior written consent.</div>
				<div className={styles.head}>Limited Licenses</div>
				<div className={styles.subpara}>
					We grant you a limited, revocable, and non-exclusive license to access and make personal use of Petaluxe website. This limited license does not include the right to: (a) frame or utilize framing techniques to enclose the website or any portion thereof; (b) republish, redistribute, transmit, sell, license or download the website or any and/or all Content (except caching or as necessary to view the website); (c) make any use of the website or any and/or all Content other than personal use; (d) modify, reverse engineer or create any derivative works based upon either the website or any and/or all Content; (e) collect account information for the benefit of yourself or another party; (f) use any meta tags or any other “hidden text” utilizing any and/or all Content; or (g) use software robots, spiders, crawlers, or similar data gathering and extraction tools, or take any other action that may impose an unreasonable burden or load on our infrastructure. You must
					retain, without modification, all proprietary notices on the website or affixed to or contained in the website.
				</div>
				<div className={styles.subpara}>
					We also grant you a limited, revocable, and nonexclusive license to create a hyperlink to the home page of the website for personal, non-commercial use only. A website that links to the website (i) may link to, but not replicate, any and/or all of our Content; (ii) may not imply that we are endorsing such website or its services or products; (iii) may not misrepresent its relationship with us; (iv) may not contain content that could be construed as distasteful, obscene, offensive controversial or illegal or inappropriate for any ages; (v) may not portray us or our products or services, in a false, misleading, derogatory, or otherwise offensive or objectionable manner, or associate us with undesirable products, services, or opinions; and (vi) may not link to any page of the website other than the home page. We may, in our sole discretion, request that you remove any link to the website, and upon receipt of such request, you shall immediately remove such link and
					cease any linking unless separately and expressly authorized in writing by us to resume linking.
				</div>
				<div className={styles.subpara}>Any unauthorized use by you of the Petaluxe website or any and/or all of our Content automatically terminates the limited licenses set forth in this Section without prejudice to any other remedy provided by applicable law or these Terms and Conditions.</div>
				<div className={styles.head}>Your Obligations and Responsibilities</div>
				<div className={styles.subpara}>In the access or use of the Petaluxe website, you shall comply with these Terms and Conditions and the special warnings or instructions for access or use posted on the website. You shall act always in accordance with the law, custom and in good faith. You may not make any change or alteration to the website or any Content or services that may appear on this website and may not impair in any way the integrity or operation of the website. Without limiting the generality of any other provision of these Terms and Conditions, if you default negligently or wilfully in any of the obligations set forth in these Terms and Conditions, you shall be liable for all the losses and damages that this may cause to Petaluxe, our Affiliates, partners or licensors.</div>
				<div className={styles.head}>Third-Party Links</div>
				<div className={styles.subpara}>We are not responsible for the content of any off-website pages or any other websites linked to or from the Petaluxe website. Links appearing on this website are for convenience only and are not an endorsement by us, our affiliates or our partners of the referenced content, product, service, or supplier. Your linking to or from any off-website pages or other websites is at your own risk. We are in no way responsible for examining or evaluating, and we do not warrant the offerings of, off-web site pages or any other websites linked to or from the site, nor do we assume any responsibility or liability for the actions, content, products, or services of such pages and websites, including, without limitation, their privacy policies and terms and conditions. You should carefully review the terms and conditions and privacy policies of all off-website pages and other websites that you visit.</div>
				<div className={styles.head}>Special Features, Functionality, And Events</div>
				<div className={styles.subpara}>Petaluxe may offer certain special features and functionality or events (such as contests, promotions or other offerings) which may (a) be subject to terms of use, rules and/or policies in addition to or in lieu of these Terms and Conditions; and (b) be offered by us or by third parties. If so, we will notify you of this and if you choose to take advantage of these offerings, you agree that your use of those offerings will be subject to such additional or separate terms of use, rules and/or policies.</div>
				<div className={styles.head}>Submissions</div>
				<div className={styles.subpara}>
					It is our policy to decline unsolicited suggestions and ideas. Notwithstanding our policy with regard to unsolicited suggestions and ideas, any inquiries, feedback, suggestions, ideas or other information you provide us (collectively, “Submissions”) will be treated as non-proprietary and non-confidential. Subject to the terms of our Privacy Policy, by transmitting or posting any Submission, you hereby grant us the right to copy, use, reproduce, modify, adapt, translate, publish, license, distribute, sell or assign the Submission in any way as we see fit, including but not limited to copying in whole or in part, creating derivative works from, distributing and displaying any Submission in any form, media, or technology, whether now known or hereafter developed, alone or as part of other works, or using the Submission within or in connection with our products or services. You also acknowledge that your Submission will not be returned and we may use your
					Submission, and any ideas, concepts or know-how contained therein, without payment of money or any other form of consideration, for any purpose including, without limitation, developing, manufacturing, distributing and marketing products.
				</div>
				<div className={styles.subpara}>If you make a Submission, you represent and warrant that you own or otherwise control the rights to your Submission. You further represent and warrant that such Submission does not constitute or contain software viruses, commercial solicitation, chain letters, mass mailings, or any form of “spam”. You may not use a false email address, impersonate any person or entity, or otherwise mislead us as to the origin of any Submission. You agree to indemnify us for all claims arising from or in connection with any claims to any rights in any Submission or any damages arising from any Submission.</div>
				<div className={styles.head}>User Content</div>
				<div className={styles.subpara}>
					When you transmit, upload, post, e-mail or otherwise make available data, text, software, music, sound, photographs, graphics, images, videos, messages or other materials (“User Content”) on the website, you are entirely responsible for such User Content. Such User Content constitutes a Submission under Section 10 above. This means that all third parties, and not we, are entirely responsible for all User Content that they post to the website. You agree not to engage in or assist or encourage others to engage in transmitting, uploading, posting, emailing or otherwise making available on the website User Content that (a) is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, pornographic, libellous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable; (b) you do not have a right to make available under any law or under contractual or fiduciary relationships; (c) is known by you to be
					false, inaccurate or misleading; (d) you were compensated for or granted any consideration by any third party; or (e) infringes any patent, trademark, trade secret, copyright or other proprietary and/or intellectual property rights of any party. In addition, you agree not to transmit, upload, post, e-mail, or otherwise make available any software viruses, unsolicited or unauthorized advertising, solicitation or promotional material, including chain letters, mass mailings, or any form of “spam”. You further agree not to (i) impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with any person or entity; (ii) “stalk” or otherwise harass including advocating harassment of another, entrap or harm any third party including harming minors in any way; (iii) forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content; (iv) intentionally or unintentionally violate any applicable local,
					state, national or international law; or (v) collect or store personally identifiable data about other users.
				</div>
				<div className={styles.subpara}>We do not endorse or control the User Content transmitted or posted on the Petaluxe website and therefore, we do not guarantee the accuracy, integrity or quality of User Content. You understand that by using this website, you may be exposed to User Content that is offensive, indecent or objectionable to you. Under no circumstances will we be liable in any way for any User Content, including, without limitation, for any errors or omissions in any User Content, or for any loss or damage of any kind incurred by you as a result of the use of any User Content transmitted, uploaded, posted, emailed or otherwise made available via the website.</div>
				<div className={styles.subpara}>You acknowledge that we have the right (but not the obligation) in our sole discretion to refuse to post or remove any User Content and we reserve the right to change, condense, or delete any User Content. Without limiting the generality of the foregoing or any other provision of these Terms and Conditions, we have the right to remove any User Content that violates these Terms and Conditions or is otherwise objectionable and we reserve the right to refuse service without prior notice for any users who violate these Terms and Conditions or infringe the rights of others.</div>
				<div className={styles.head}>Copyright Complaints</div>
				<div className={styles.subpara}>We respect the intellectual property of others. If you believe that copyrighted materials have been copied in a way that constitutes copyright infringement, please send an email or written notice to us for notices of infringement and provide the following: (i) identification of the copyrighted work(s) that you claim has been infringed and that you are the copyright owner or authorized to act on the copyright owner's behalf; (ii) a description of the material that you claim is infringing and the location of the material on the website; (iii) your address, telephone number and email address to: enquiries@Petaluxe.in</div>
				<div className={styles.subpara}>Note: The above contact information is provided exclusively for notifying Petaluxe that copyrighted material may have been infringed. All other inquiries will not receive a response through this process and should be directed to our customer service group by email at enquiries@Petaluxe.in</div>
				<div className={styles.head}>Representations and Warranties and Limitation of Liability</div>
				<div className={styles.subpara}>Petaluxe website is presented “As Is”. We make no representations or warranties of any kind whatsoever, express or implied, in connection with these terms and conditions or the site, including but not limited to warranties of merchantability, non-infringement or fitness for a particular purpose, except to the extent such representations and warranties are not legally excludable.</div>
				<div className={styles.subpara}>You agree that, to the fullest extent permitted by applicable law, we will not be responsible or liable (whether in contract, tort (including negligence) or otherwise), under any circumstances, for any (a) interruption of business; (b) access delays or access interruptions to the site; (c) data non-delivery, mis-delivery, corruption, destruction or other modification; (d) loss or damages of any sort incurred as a result of dealings with or the presence of off-website links on the website; (e) computer viruses, system failures or malfunctions which may occur in connection with your use of the site, including during hyperlink to or from third-party websites (f) any inaccuracies or omissions in content or (g) events beyond our reasonable control.</div>
				<div className={styles.subpara}>
					Petaluxe personal care products are based on natural and ayurvedic formulations. Though enormous efforts are made and precautions are taken to render the products absolutely safe for human use, it is possible that certain ingredients may cause allergic reactions to certain individuals or adversely to affect individuals with pre-existing medical conditions. Please make yourself aware of the ingredients and usage instructions accompanying each of our products to make sure that they are safe for you to use. It will be your sole responsibility to take proper precaution/ professional medical/ dermatological advice before using any of our personal care products that you may be allergic to. You agree that Petaluxe will not be responsible or liable for any product-related issues including without limitation any allergic reactions to you on account of the usage of our products. For any purchases made through the Petaluxe, you will inter alia be governed by the
					limitation of liability and disclaimer conditions provided in more detail with the product packaging/leaflets.
				</div>
				<div className={styles.subpara}>Further, to the fullest extent permitted by law, we will not be liable for any indirect, special, punitive, incidental, or consequential damages of any kind (including lost profits) related to the website or your use thereof regardless of the form of action whether in contract, tort (including negligence) or otherwise, even if we have been advised of the possibility of such damages and in no event shall our maximum aggregate liability exceed Indian Rupees 2000 only.</div>
				<div className={styles.subpara}>You agree that no claims or action arising out of, or related to, the use of the website or these terms and conditions may be brought by you more than one (1) year after the cause of action relating to such claim or action arose.</div>
				<div className={styles.head}>Indemnification</div>
				<div className={styles.subpara}>You agree to defend, indemnify and hold us harmless for any loss, damages or costs, including reasonable attorneys' fees, resulting from any third party claim, action, or demand resulting from your use of Petaluxe or breach of these Terms and Conditions. You also agree to indemnify us for any loss, damages, or costs, including reasonable attorneys' fees, resulting from your use of software robots, spiders, crawlers, or similar data gathering and extraction tools, or any other action you take that imposes an unreasonable burden or load on our infrastructure.</div>
				<div className={styles.head}>Disputes</div>
				<div className={styles.subpara}>
					With respect to any dispute regarding the website, all rights and obligations and all actions contemplated by these Terms and Conditions shall be governed by the laws of India and the courts of New Delhi, India, as if the Terms and Conditions were a contract wholly entered into and wholly performed within New Delhi, India, subject to foreign legal mandatory provisions. To the fullest extent permitted by applicable law, any dispute, differences or claim arising out of your visit to the Petaluxe website shall be referred to the sole Arbitrator appointed by the Chairman and Managing Director of Petaluxe in accordance with the law. The venue of such arbitration shall be at New Delhi, India and the award of the Arbitrator shall be final and binding on all parties and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under these Terms and Conditions shall be joined to an arbitration
					involving any other party subject to this Terms and Conditions, whether through class arbitration proceedings or otherwise.
				</div>
				<div className={styles.subpara}>To the extent arbitration is not permitted by applicable law, any dispute relating in any way to your visit to the website shall be submitted to an appropriate court or other judicial bodies in New Delhi, India, as applicable, without prejudice to the applicable law and all applicable provisions of this Section, and subject to our right to seek injunctive or other appropriate relief in any court, if you have in any manner violated or threatened to violate our intellectual property rights and you consent to exclusive jurisdiction and venue in such courts.</div>
				<div className={styles.subpara}>Consent To Receive Notices Electronically By Posting On The Website And Via Email</div>
				<div className={styles.subpara}>You consent to receive any agreements, notices, disclosures and other communications (collectively, “Notices”) to which these Terms and Conditions refer from us electronically including without limitation by email or by posting notices on this website. You agree that all Notices that we provide to you electronically satisfy any legal requirement that such communications be in writing in English. To withdraw your consent to receive Notices electronically, you must notify us of your withdrawal of such consent by emailing us at enquiries@Petaluxe.com and discontinue your use of this website. In such event, all rights granted to you pursuant to these Terms and Conditions, including but not limited to the limited licenses set forth in Section 6 hereof, shall automatically terminate. Unfortunately, we cannot provide the benefits of this website to any user that cannot consent to the receipt of Notices electronically.</div>
				<div className={styles.subpara}>Please note that this consent to receive Notices is entirely separate from any election you may make with respect to receipt of marketing communications. Your options with respect to receipt of marketing communications are set forth in our Privacy Policy.</div>
				<div className={styles.head}>E-Gift Cards (Terms & Conditions)</div>
				<div className={styles.subpara}>The gift card can be loaded in multiples of INR 500 with a minimum value of Rs 1000.</div>
				<div className={styles.subpara}>The gift card shall be valid for a period of 1 year from the date of issuance. Any unused balance will not be refunded or credited when the card expires.</div>
				<div className={styles.subpara}>The gift card can be redeemed only at exclusive Petaluxe stores or at www.Petaluxe.com</div>
				<div className={styles.subpara}>The gift card can either be used in full or partially and is not redeemable for cash or credit.</div>
				<div className={styles.subpara}>Petaluxe reserves the right to amend these terms & conditions or discontinue the card at its discretion.</div>
				<div className={styles.subpara}>No replacement, refund or compensations shall be payable in case of any damaged, mutilated or lost card.</div>
				<div className={styles.subpara}>Dispute/s, if any, in relation to this card and/or pursuant to the usage of this card shall be governed in accordance with the laws of India and subject to the Courts of Delhi.</div>
				<div className={styles.subpara}>The gift card is not a legal tender and can neither be recharged nor revalidated.</div>
				<div className={styles.subpara}>No loyalty points will be awarded on the value of the gift card during any transaction.</div>
				<div className={styles.subpara}>The gift card cannot be clubbed with any other promotion or benefit.</div>
				<div className={styles.head}>Free Trial</div>
				<div className={styles.subpara}>The Free Trial is restricted to a maximum of 3 samples per order.</div>
				<div className={styles.subpara}>Only one Free Trial may be ordered at a time.</div>
				<div className={styles.subpara}>The order of a Free Trial cannot be combined with a purchase of full-size products. For any other purchase, a separate order must be placed from the same account.</div>
				<div className={styles.subpara}>Petaluxe reserves the right to change/modify/add/delete any of the terms and conditions prevailing on the Free Trial promotion and at its discretion, can withdraw. limit the same from time to time.</div>
				<div className={styles.head}>General</div>
				<div className={styles.subpara}>You acknowledge and agree that these Terms and Conditions constitute the complete and exclusive agreement between us concerning your use of the website, and supersede and govern all prior proposals, agreements, or other communications.</div>
				<div className={styles.subpara}>We reserve the right, in our sole discretion, to change these Terms and Conditions at any time by posting the changes on the website and providing notice of such change. Any changes are effective immediately upon posting to the Site and release of notice of such change. Your continued use of the website thereafter constitutes your agreement to all such changed Terms and Conditions. We may, with or without prior notice, terminate any of the rights granted by these Terms and Conditions. You shall comply immediately with any termination or other notice, including, as applicable, by ceasing all use of the website.</div>
				<div className={styles.subpara}>Nothing contained in these Terms and Conditions shall be construed as creating any agency, partnership, or other forms of joint enterprise between us. Our failure to require your performance of any provision hereof shall not affect our full right to require such performance at any time thereafter, nor shall our waiver of a breach of any provision hereof be taken or held to be a waiver of the provision itself. In the event that any provision of these Terms and Conditions shall be unenforceable or invalid under any applicable law or be so held by any applicable arbitral award or court decision, such unenforceability or invalidity shall not render these Terms and Conditions unenforceable or invalid as a whole but these Terms and Conditions shall be modified, to the extent possible, by the adjudicating entity to most fully reflect the original intent of the parties as reflected in the original provision.</div>
				<div className={styles.subpara}>If you have any questions regarding these Terms and Conditions, please email us at enquiries@Petaluxe.in</div>
				<div className={styles.subpara}>Worldwide Copyright © Petaluxe.in. (brand owners RADS PERFUMERY). All worldwide rights reserved.</div>
			</div>
			<Footer />
		</div>
	);
};

export default Terms;