export const DEPARTMENTS =  [
    'CS',
    'Math',
    'Science'
];

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept
}));

export const MOCK_SUBJECTS = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An overview of computer science, covering algorithms, data structures, and programming basics.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Study of vectors, matrices, systems of linear equations, and vector spaces.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "SCI301",
        name: "General Physics",
        department: "Science",
        description: "Introduction to classical mechanics, thermodynamics, and electromagnetism.",
        createdAt: new Date().toISOString(),
    },
];