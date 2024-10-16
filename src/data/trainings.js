import jHealth1 from "../assets/images/jHealth1.png";
import jHealth2 from "../assets/images/jHealth2.png";
import jHealth3 from "../assets/images/jHealth3.png";
import jHealth4 from "../assets/images/jHealth4.png";
import jHealth5 from "../assets/images/jHealth5.png";
import jHealth6 from "../assets/images/jHealth6.png";
import jHealth7 from "../assets/images/jHealth7.png";
import jHealth8 from "../assets/images/jHealth8.png";
import jHealth9 from "../assets/images/jHealth9.png";
import jHealth10 from "../assets/images/jHealth10.png";
import jHealth11 from "../assets/images/jHealth11.png";
import jHealth12 from "../assets/images/jHealth12.png";
import jHealth13 from "../assets/images/jHealth13.png";
import jCatering1 from "../assets/images/jCatering1.png";
import jCatering2 from "../assets/images/jCatering2.png";
import jCatering3 from "../assets/images/jCatering3.png";
import jCatering4 from "../assets/images/jCatering4.png";
import jCatering5 from "../assets/images/jCatering5.png";
import jChildcare1 from "../assets/images/jChildcare1.png";
import jChildcare2 from "../assets/images/jChildcare2.png";
import jChildcare3 from "../assets/images/jChildcare3.png";
import jChildcare4 from "../assets/images/jChildcare4.png";

const Trainings = [
  {
    id: 1,
    image: jHealth1,
    name: "First Aid at Work Level 3",
    link: "/trainings/first-aid-at-work-level-3",
    desc: "Our comprehensive first aid course is designed for high-risk workplaces like construction sites or factories. It includes advanced training such as using tourniquets and haemostatic dressings to handle serious injuries effectively.",
    duration: "3 days (18 hours)",
    mode: "Classroom or blended (2 days online, 1 day face-to-face)",
    certification: "Valid for 3 years",
    price: "£210.00",
    content:
      "Incident assessment, first aid for unresponsive casualties, choking, bleeding, shock, burns, injuries, and more.",
    trainingType: "health",
  },
  {
    id: 2,
    image: jHealth2,
    name: "Paediatric First Aid Level 3 (OFSTED Compliant)",
    link: "/trainings/paediatric-first-aid-level-3-(ofsted-compliant)",
    desc: "Ideal for childcare workers or childminders, this course meets OFSTED and EYFS requirements. It covers essential first aid techniques for infants and children, ensuring that caregivers can respond to emergencies confidently.",
    duration: "2 days (12 hours)",
    mode: "Classroom or blended (1 day online, 1 day face-to-face)",
    certification: "Valid for 3 years",
    price: "£130.00 / £110.00 (depending on package)",
    content:
      "Unresponsive child/infant, choking, bleeding, shock, injuries, and acute medical conditions like asthma and allergic reactions.",
    trainingType: "health",
  },
  {
    id: 3,
    image: jHealth3,
    name: "Emergency First Aid",
    link: "/trainings/emergency-first-aid",
    desc: "This shorter course is suited for low-risk workplaces, such as offices or service industries. Participants will learn to provide basic first aid in emergency situations and respond effectively to minor injuries.",
    duration: "1 day (6 hours)",
    mode: "Classroom or blended (2 hours online, 4 hours face-to-face)",
    certification: "Valid for 3 years",
    price: "£90.00",
    content:
      "Basic first aid skills for incidents, unresponsive casualties, choking, bleeding, burns, and minor injuries.",
    trainingType: "health",
  },
  {
    id: 4,
    image: jHealth4,
    name: "Emergency Paediatric First Aid",
    link: "/trainings/emergency-paediatric-first-aid",
    desc: "Designed for those responsible for infants and children, this course focuses on the essential emergency first aid techniques required for both workplaces and home settings.",
    duration: "1 day (6 hours)",
    mode: "Classroom or blended (2 hours online, 4 hours face-to-face)",
    price: "£80.00",
    content: "Unresponsive child/infant, choking, bleeding, burns, and shock.",
    trainingType: "health",
  },
  {
    id: 5,
    image: jHealth5,
    name: "Children’s Lifesaving Skills",
    link: "/trainings/children’s-lifesaving-skills",
    desc: "This fun and interactive course teaches children essential first aid skills through engaging games. They learn how to respond to common medical emergencies safely and effectively.",
    duration: "1 day",
    price: "£60.00",
    content:
      "Basic first aid, CPR, choking, bleeding, and dealing with medical emergencies.",
    trainingType: "health",
  },
  {
    id: 6,
    image: jHealth6,
    name: "Basic Life Support with AED (for Dentists and Healthcare Professionals)",
    link: "/trainings/basic-life-support-with-aed-(for-dentists-and-healthcare-professionals)",
    desc: "This course covers CPR and the use of an AED, focusing on cardiac arrest management and choking response for healthcare professionals.",
    duration: "Half day (3 hours)",
    price: "£65.00",
    content: "CPR, AED usage, cardiac arrest management, and choking response.",
    trainingType: "health",
  },
  {
    id: 7,
    image: jHealth7,
    name: "Safeguarding Awareness Level 1",
    link: "/trainings/safeguarding-awareness-level-1",
    desc: "An introductory course for professionals working with children or vulnerable adults, focusing on the fundamentals of safeguarding practices.",
    price: "£45.00",
    trainingType: "health",
  },
  {
    id: 8,
    image: jHealth8,
    name: "Safeguarding of Children Level 2",
    link: "/trainings/safeguarding-of-children-level-2",
    desc: "For individuals responsible for child protection, this course provides in-depth knowledge and strategies to ensure children's safety.",
    price: "£50.00",
    trainingType: "health",
  },
  {
    id: 9,
    image: jHealth9,
    name: "Safeguarding of Vulnerable Adults Level 2",
    link: "/trainings/safeguarding-of-vulnerable-adults-level-2",
    desc: "Focused on protecting vulnerable adults, this course covers the necessary skills to identify and respond to safeguarding concerns effectively.",
    price: "£55.00",
    trainingType: "health",
  },
  {
    id: 10,
    image: jHealth10,
    name: "Safeguarding of Children and Adults Level 3",
    link: "/trainings/safeguarding-of-children-and-adults-level-3",
    desc: "A comprehensive course offering advanced safeguarding practices for both children and adults, providing the tools to manage complex situations.",
    price: "£80.00",
    trainingType: "health",
  },
  {
    id: 11,
    image: jHealth11,
    name: "Safeguarding of Children and Young People Level 3",
    link: "/trainings/safeguarding-of-children-and-young-people-level-3",
    desc: "Designed for those working with young people, this course ensures they have the knowledge to safeguard effectively and responsibly.",
    price: "£65.00",
    trainingType: "health",
  },
  {
    id: 12,
    image: jHealth12,
    name: "Childcare Training Packages",
    link: "/trainings/childcare-training-packages",
    desc: "Tailored for individuals and organizations working with children, these packages offer various training options including First Aid, Safeguarding, and EYFS.",
    price: "Contact for details",
    trainingType: "health",
  },
  {
    id: 13,
    image: jHealth13,
    name: "Care Agency Training Packages (CQC Compliant)",
    link: "/trainings/care-agency-training-packages-(cqc-compliant)",
    desc: "Essential for care agencies, these packages cover key topics from First Aid to Safeguarding and managing medical conditions.",
    price: "Contact for details",
    trainingType: "health",
  },
  {
    id: 14,
    image: jCatering1,
    name: "Food Safety and Hygiene for Catering",
    link: "food-safety-and-hygiene-for-catering",
    desc: "Essential for catering staff, this course covers food hygiene regulations and best practices to ensure safe food handling and preparation in any kitchen environment.",
    duration: "Half day (3 hours)",
    price: "£50.00",
    content:
      "Food hygiene laws, cross-contamination prevention, food storage, allergen management, cleaning procedures.",
    trainingType: "catering",
  },
  {
    id: 15,
    image: jCatering2,
    name: "Allergen Awareness",
    link: "allergen-awareness",
    desc: "Designed to help catering staff manage and reduce the risks of food allergens in the kitchen, ensuring safer food preparation.",
    duration: "2 hours",
    price: "£40.00",
    content:
      "Understanding food allergens, how to avoid cross-contamination, and communicating allergen risks to customers.",
    trainingType: "catering",
  },
  {
    id: 16,
    image: jCatering3,
    name: "Fire Safety in Catering",
    link: "fire-safety-in-catering",
    desc: "This course provides essential fire safety training for catering staff, focusing on kitchen-specific hazards and fire prevention methods.",
    duration: "Half day (3 hours)",
    price: "£45.00",
    content:
      "Fire risk assessments, using fire extinguishers, evacuation procedures, and prevention of kitchen fires.",
    trainingType: "catering",
  },
  {
    id: 17,
    image: jCatering4,
    name: "Manual Handling in Catering",
    link: "manual-handling-in-catering",
    desc: "Ideal for catering staff who need to safely lift and carry heavy items or equipment, reducing the risk of injury in the workplace.",
    duration: "Half day (3 hours)",
    price: "£40.00",
    content:
      "Safe lifting techniques, avoiding injury, and proper use of lifting equipment.",
    trainingType: "catering",
  },
  {
    id: 18,
    image: jCatering5,
    name: "Basic Life Support (BLS) for Restaurants",
    link: "basic-life-support-bls-for-restaurants",
    desc: "This course equips restaurant staff with essential life-saving skills, enabling them to respond effectively to emergencies such as choking or cardiac arrest.",
    duration: "Half day (3 hours)",
    price: "£55.00",
    content:
      "CPR for adults, choking management, use of an AED, and handling unconscious casualties.",
    trainingType: "catering",
  },
  {
    id: 19,
    image: jChildcare1,
    name: "Safeguarding and Child Protection Training",
    link: "safeguarding-and-child-protection-training",
    desc: "Gain the skills to protect children from harm and learn how to respond appropriately to safeguarding concerns and emergencies.",
    duration: "Half day (3 hours)",
    price: "Contact for details",
    trainingType: "childcare",
  },
  {
    id: 20,
    image: jChildcare2,
    name: "12-Hour Paediatric First Aid Course (OFSTED Compliant)",
    link: "12-hour-paediatric-first-aid-course-ofsted-compliant",
    desc: "A comprehensive course covering life-saving first aid for children and infants, ensuring full compliance with OFSTED’s childcare requirements.",
    duration: "2 days (12 hours)",
    price: "Contact for details",
    trainingType: "childcare",
  },
  {
    id: 21,
    image: jChildcare3,
    name: "Common Core Skills Training",
    link: "common-core-skills-training",
    desc: "Learn essential skills such as effective communication, child development strategies, and safeguarding to provide the highest quality of care.",
    duration: "1 day",
    price: "Contact for details",
    trainingType: "childcare",
  },
  {
    id: 22,
    image: jChildcare4,
    name: "Basic Food Hygiene Course (Recommended)",
    link: "basic-food-hygiene-course-recommended",
    desc: "Ideal for nannies or childcarers responsible for preparing food. This course ensures compliance with food safety and hygiene standards.",
    duration: "3 hours",
    price: "Contact for details",
    trainingType: "childcare",
  },
];

export default Trainings;
