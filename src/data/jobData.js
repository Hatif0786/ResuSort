export const functionalAreas = [
  "Information Technology",
  "Engineering",
  "Sales & Marketing",
  "Finance & Accounting",
  "Human Resources",
  "Operations",
  "Research & Development",
  "Healthcare",
  "Legal",
  "Administration"
];

export const designations = {
  "Information Technology": [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Data Scientist",
    "System Administrator",
    "Database Administrator",
    "Cloud Architect",
    "IT Project Manager"
  ],
  "Engineering": [
    "Mechanical Engineer",
    "Electrical Engineer",
    "Civil Engineer",
    "Chemical Engineer",
    "Industrial Engineer",
    "Process Engineer",
    "Quality Engineer",
    "Design Engineer",
    "Project Engineer",
    "Safety Engineer"
  ],
  "Sales & Marketing": [
    "Sales Manager",
    "Marketing Manager",
    "Business Development Manager",
    "Digital Marketing Specialist",
    "Product Marketing Manager",
    "Sales Representative",
    "Marketing Coordinator",
    "Brand Manager",
    "Content Marketing Manager",
    "SEO Specialist"
  ],
  // Add more designations for other areas...
};

export const getDesignationsForArea = (functionalArea) => {
  return designations[functionalArea] || [];
};

export const getAllDesignations = () => {
  return Object.values(designations).flat();
}; 