import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
    return (
        <div className="flex-center text-5xl h-screen text-indigo-200">
            Hello! GSAP
        </div>
    );
}
