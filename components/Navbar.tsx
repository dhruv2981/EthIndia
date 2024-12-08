"use client";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import { useOkto, type OktoContextType, type User } from "okto-sdk-react";
import Link from "next/link";
import React from "react";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import useUpdateCurrentUserData from "@/hooks/useUpdateCurrentUserData";
import { base } from "viem/chains";
import { useUserStore } from "./../store";

export const Navbar = () => {
  const { createWallet } = useOkto() as OktoContextType;
  const [userWalletAddress, setUserWalletAddress] =useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();
  const { address } = useAccount();
  const route = usePathname();
  // const { userWalletAddress } = useUserStore();
  // const { userData } = useUpdateCurrentUserData(address);
  // console.log("userData is ", userData);

  const connectWithWallet = async () => {
    setIsConnecting(true);
    createWallet()
      .then((result) => {
        console.log(result, "result");
        setUserWalletAddress(result.wallets[3].address);
        localStorage.setItem("walletAddress", userWalletAddress);
      })
      .catch((error) => {
        console.error(`error:`, error);
      });
  };

  // useEffect(() => {
  //   // console.log("wallet address is ", userWalletAddress);
  // }, [userData]);
  // useEffect(() => {
  //   if (userData && route === "/") {
  //     if (userData && userData[0].length > 0) {
  //       router.push("/progress");
  //     } else {
  //       router.push("/profile-setup");
  //     }
  //   }
  // }, [userWalletAddress]);
  return (
    <>
      <div className="bg-slate-800 text-white">
        <div className="px-4">
          <div className="container ">
            <div className="py-4 flex items-center justify-between">
              <Link href="\">
                <div className="">
                  <div className="absolute w-full bottom-0  "></div>
                  <img
                    src="https://res.cloudinary.com/dxn4bwg6u/image/upload/v1728612664/smart-watch-icon-vector-fitness-gym-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-mobile-193468610_vamgri.jpg"
                    alt="Smart Watch Icon"
                    height={50}
                    width={50}
                    className="rounded-full ml-10"
                  />
                </div>
              </Link>
              <nav>
                <button
                  onClick={connectWithWallet}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {localStorage.getItem("walletAddress") !== "" ? <>{userWalletAddress}</> : <>Connect Wallet</> }
                </button>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
