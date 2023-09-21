import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress()
    // console.log(progress)

    return (
        <Html>
            <p className='progress-text'>{progress.toFixed(2)}%</p>
        </Html>
    )
}
