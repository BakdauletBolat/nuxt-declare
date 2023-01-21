export const phoneTrimmer = (word: string) => {
    return word.replace('(','').replace(')','').replace('+','').replace(/\s+/g,'')
}