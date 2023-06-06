import { useState, useEffect } from 'react'
import './App.css'
import UnityApp from './UnityApp,'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const options = [
  {
    buildName: "SubterraTestV2",
    directoryName: "360video",
    name: "360 Video Player",
    description: "asdf",
  },
  {
    buildName: "Build",
    directoryName: "slidingGame",
    name: "Sliding Puzzle Game",
    description: "fasd",
  },
  {
    buildName: "Build",
    directoryName: "chocolateWay",
    name: "Chocolate Puzzle Game",
    description: "asdasd",
  }
]

function App() {
  // const [count, setCount] = useState(0)
  const [currentOption, setCurrentOption] = useState({
    buildName: "",
    directoryName: ""
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [currentOption])

  const handleOption = (index) => {
    setCurrentOption(options[index]);
  }

  const handleReset = () => {
    window.location.reload(false);
  }

  if (currentOption.buildName === "") {
    return (
      <div className={"card-container"}>
        {
          options.map((option, index) => {
            return (
              <Card key={index} className="card w-90 text-slate-500 dark:text-slate-400 text-sm" onClick={() => { handleOption(index) }}>
                <CardHeader color="blue-gray" className="relative h-50">
                  <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {option.name}
                  </Typography>
                  <Typography color="blue-gray" >
                    {option.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Try</Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    )
  }

  if (isLoading) {
    return (
      <>
        <p>Is Loading...</p>
      </>
    )
  }

  return (
    <>
      <UnityApp buildName={currentOption.buildName} directoryName={currentOption.directoryName} />
      <button onClick={() => handleReset()}>Reset</button>
    </>
  )
}

export default App
