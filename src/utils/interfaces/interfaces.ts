interface Skill {
    icon: string;
    title: string;
    description: string;
}

interface Todos {
    completed: boolean
    id: number
    title: string
    userId: number
}


  
export {
    Skill,
    Todos
}