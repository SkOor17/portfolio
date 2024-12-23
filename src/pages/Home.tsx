import TextUnderline from "../components/TextUnderline";

export default function Home() {
  return (
    <div className="inline-flex">
        <div>
          Test du text underline
        </div>
        <TextUnderline className="absolute top-4 left-0">
          portfolio
        </TextUnderline>
    </div>
  )
}
