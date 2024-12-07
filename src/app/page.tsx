"use client";
import React, { useEffect, useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import { useOkto, OktoContextType, BuildType, AuthType } from "okto-sdk-react";
import { useAppContext } from "./components/AppContext";
import Landing from "./landing/page";



export default function Home() {
  const { data: session } = useSession();
  const { apiKey, setApiKey, buildType, setBuildType } = useAppContext();

  return (
    <>
      <div className=" items-center justify-items-center min-h-screen  ">
        <Landing />
      </div>
    </>
  );
  
}

