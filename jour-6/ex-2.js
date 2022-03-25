const calculateAge = (bth) => {
    const birthday = new Date(bth)
    const years = new Date(new Date() - birthday).getFullYear() - 1970
    const months = new Date(new Date() - birthday).getMonth()
    const days = new Date(new Date() - birthday).getDate() - 1
    return `You are ${years} years ${months} months ${days} days`
}

console.log(calculateAge("1999-06-18"));