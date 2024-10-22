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
    name: "First Aid & Emergency Response",
    image: jHealth1, // Image of the first element in this group
    desc: "Courses that focus on essential first aid skills and effective emergency response techniques. These courses are ideal for high-risk, low-risk, and childcare settings, ensuring comprehensive safety training.",
    trainingType: "health",
    courses: [
      {
        name: "First Aid at Work Level 3",
        link: "/trainings/first-aid-at-work-level-3",
        desc: "Our comprehensive first aid course is designed for high-risk workplaces like construction sites or factories. It includes advanced training such as using tourniquets and haemostatic dressings to handle serious injuries effectively.",
        duration: "3 days (18 hours)",
        mode: "Classroom or blended (2 days online, 1 day face-to-face)",
        certification: "Valid for 3 years",
        price: "£210.00",
        content:
          "Incident assessment, first aid for unresponsive casualties, choking, bleeding, shock, burns, injuries, and more.",
      },
      {
        name: "Paediatric First Aid Level 3 (OFSTED Compliant)",
        link: "/trainings/paediatric-first-aid-level-3-(ofsted-compliant)",
        desc: "Ideal for childcare workers or childminders, this course meets OFSTED and EYFS requirements. It covers essential first aid techniques for infants and children, ensuring that caregivers can respond to emergencies confidently.",
        duration: "2 days (12 hours)",
        mode: "Classroom or blended (1 day online, 1 day face-to-face)",
        certification: "Valid for 3 years",
        price: "£130.00 / £110.00 (depending on package)",
        content:
          "Unresponsive child/infant, choking, bleeding, shock, injuries, and acute medical conditions like asthma and allergic reactions.",
      },
      {
        name: "Emergency First Aid",
        link: "/trainings/emergency-first-aid",
        desc: "This shorter course is suited for low-risk workplaces, such as offices or service industries. Participants will learn to provide basic first aid in emergency situations and respond effectively to minor injuries.",
        duration: "1 day (6 hours)",
        mode: "Classroom or blended (2 hours online, 4 hours face-to-face)",
        certification: "Valid for 3 years",
        price: "£90.00",
        content:
          "Basic first aid skills for incidents, unresponsive casualties, choking, bleeding, burns, and minor injuries.",
      },
      {
        name: "Emergency Paediatric First Aid",
        link: "/trainings/emergency-paediatric-first-aid",
        desc: "Designed for those responsible for infants and children, this course focuses on the essential emergency first aid techniques required for both workplaces and home settings.",
        duration: "1 day (6 hours)",
        mode: "Classroom or blended (2 hours online, 4 hours face-to-face)",
        price: "£80.00",
        content:
          "Unresponsive child/infant, choking, bleeding, burns, and shock.",
      },
      {
        name: "Children’s Lifesaving Skills",
        link: "/trainings/children’s-lifesaving-skills",
        desc: "This fun and interactive course teaches children essential first aid skills through engaging games. They learn how to respond to common medical emergencies safely and effectively.",
        duration: "1 day",
        price: "£60.00",
        content:
          "Basic first aid, CPR, choking, bleeding, and dealing with medical emergencies.",
      },
      {
        name: "Basic Life Support with AED (for Dentists and Healthcare Professionals)",
        link: "/trainings/basic-life-support-with-aed-(for-dentists-and-healthcare-professionals)",
        desc: "This course covers CPR and the use of an AED, focusing on cardiac arrest management and choking response for healthcare professionals.",
        duration: "Half day (3 hours)",
        price: "£65.00",
        content:
          "CPR, AED usage, cardiac arrest management, and choking response.",
      },
    ],
  },
  {
    id: 2,
    name: "Safeguarding & Child Protection",
    image: jHealth7, // Image of the first element in this group
    desc: "In-depth courses designed specifically for safeguarding children, vulnerable adults, and young people at various levels. Each course provides essential skills and knowledge to effectively protect those at risk.",
    trainingType: "health",
    courses: [
      {
        name: "Safeguarding Awareness Level 1",
        link: "/trainings/safeguarding-awareness-level-1",
        desc: "An introductory course for professionals working with children or vulnerable adults, focusing on the fundamentals of safeguarding practices.",
        price: "£45.00",
      },
      {
        name: "Safeguarding of Children Level 2",
        link: "/trainings/safeguarding-of-children-level-2",
        desc: "For individuals responsible for child protection, this course provides in-depth knowledge and strategies to ensure children's safety.",
        price: "£50.00",
      },
      {
        name: "Safeguarding of Vulnerable Adults Level 2",
        link: "/trainings/safeguarding-of-vulnerable-adults-level-2",
        desc: "Focused on protecting vulnerable adults, this course covers the necessary skills to identify and respond to safeguarding concerns effectively.",
        price: "£55.00",
      },
      {
        name: "Safeguarding of Children and Adults Level 3",
        link: "/trainings/safeguarding-of-children-and-adults-level-3",
        desc: "A comprehensive course offering advanced safeguarding practices for both children and adults, providing the tools to manage complex situations.",
        price: "£80.00",
      },
      {
        name: "Safeguarding of Children and Young People Level 3",
        link: "/trainings/safeguarding-of-children-and-young-people-level-3",
        desc: "Designed for those working with young people, this course ensures they have the knowledge to safeguard effectively and responsibly.",
        price: "£65.00",
      },
    ],
  },
  {
    id: 3,
    name: "Childcare & Care Agency Training",
    image: jHealth12, // Image of the first element in this group
    desc: "Comprehensive training packages specifically designed for childcare providers and care agencies to ensure compliance. These packages cover essential regulatory requirements, including standards set by the Care Quality Commission (CQC).",
    trainingType: "health",
    courses: [
      {
        name: "Childcare Training Packages",
        link: "/trainings/childcare-training-packages",
        desc: "Tailored for individuals and organisations working with children, these packages offer various training options including First Aid, Safeguarding, and EYFS.",
        price: "Contact for details",
      },
      {
        name: "Care Agency Training Packages (CQC Compliant)",
        link: "/trainings/care-agency-training-packages-(cqc-compliant)",
        desc: "Essential for care agencies, these packages cover key topics from First Aid to Safeguarding and managing medical conditions.",
        price: "Contact for details",
      },
    ],
  },

  {
    id: 4,
    name: "Health & Social Care Qualifications",
    image: jHealth11, // Replace with relevant image
    desc: "These qualifications equip learners with skills to work in health and social care settings. Learners can choose pathways such as working with people with dementia, disabilities, or children.",
    trainingType: "health",
    courses: [
      {
        name: "Level 2 Diploma in Health and Social Care",
        link: "/trainings/level-2-diploma-in-health-and-social-care",
        desc: "A foundational qualification designed for individuals starting a career in health and social care, or those already working in the field looking to certify their skills.",
        requirements:
          "No prior experience needed. Suitable for those new to care roles.",
        recognition:
          "Meets Quality Care Commission (QCC) and Care Councils' requirements.",
        price: "Contact for details",
        pathways: [
          "Working with children and young people",
          "Working with people with a learning disability",
          "Supporting individuals with dementia",
        ],
      },
      {
        name: "Level 3 Diploma in Health and Social Care",
        link: "/trainings/level-3-diploma-in-health-and-social-care",
        desc: "An advanced qualification required for senior care roles, designed for individuals already employed in a care setting.",
        requirements: "Must be employed in a care role.",
        recognition:
          "Meets requirements for senior care workers by QCC and Care Councils.",
        price: "Contact for details",
        pathways: [
          "Specializing in learning disabilities",
          "Supporting adults with dementia",
          "Caring for children in residential settings",
        ],
      },
      {
        name: "Functional Skills - Maths, English, and Digital Skills",
        link: "/trainings/functional-skills-maths-english-digital",
        desc: "Designed for learners at college, adult programs, or apprenticeships. These qualifications provide essential skills needed for employment, further studies, and navigating real-life situations.",
        levels: ["Level 1", "Level 2", "Level 3"],
        price: "Contact for details",
        benefits: [
          "Supports future employment opportunities",
          "Builds confidence for further education",
          "Enhances practical, day-to-day skills",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Catering Training Programs",
    image: jCatering1, // Image of the first element in this group
    desc: "Our training packages for the catering industry are tailored to meet the specific needs of catering businesses, ensuring staff are trained to the highest standards of safety, hygiene, and compliance.    ",
    trainingType: "catering",
    courses: [
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
    ],
  },
  {
    id: 19,
    name: "Childcare Training Programme",
    image: jChildcare1, // Image of the first element in this group
    desc: "A comprehensive course covering life-saving first aid for children and infants, the skills to protect children from harm, child development strategies, and safeguarding to provide the highest quality of care.",
    trainingType: "childcare",
    courses: [
      {
        id: 19,
        // image: jChildcare1,
        name: "Safeguarding and Child Protection Training",
        link: "safeguarding-and-child-protection-training",
        desc: "Gain the skills to protect children from harm and learn how to respond appropriately to safeguarding concerns and emergencies.",
        duration: "Half day (3 hours)",
        price: "Contact for details",
        trainingType: "childcare",
      },
      {
        id: 20,
        // image: jChildcare2,
        name: "12-Hour Paediatric First Aid Course (OFSTED Compliant)",
        link: "12-hour-paediatric-first-aid-course-ofsted-compliant",
        desc: "A comprehensive course covering life-saving first aid for children and infants, ensuring full compliance with OFSTED’s childcare requirements.",
        duration: "2 days (12 hours)",
        price: "Contact for details",
        trainingType: "childcare",
      },
      {
        id: 21,
        // image: jChildcare3,
        name: "Common Core Skills Training",
        link: "common-core-skills-training",
        desc: "Learn essential skills such as effective communication, child development strategies, and safeguarding to provide the highest quality of care.",
        duration: "1 day",
        price: "Contact for details",
        trainingType: "childcare",
      },
      {
        id: 22,
        // image: jChildcare4,
        name: "Basic Food Hygiene Course (Recommended)",
        link: "basic-food-hygiene-course-recommended",
        desc: "Ideal for nannies or childcarers responsible for preparing food. This course ensures compliance with food safety and hygiene standards.",
        duration: "3 hours",
        price: "Contact for details",
        trainingType: "childcare",
      },
    ],
  },
];

export default Trainings;
