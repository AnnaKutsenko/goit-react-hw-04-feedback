import { SectionTitle, SectionText } from "./Section.styled"

export const Section = ({ title, children }) => {
        return (
        <SectionTitle>
            <SectionText>{ title }</SectionText>
            { children }
        </SectionTitle>
        )
    }