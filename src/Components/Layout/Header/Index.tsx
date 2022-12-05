import { Autocomplete, TextField, IconButton } from "@mui/material";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import Logo from "../../../Images/Logo.png";

export const Header = () => {
  const top100Films = ["Mettalica", "Shopee", "Tiktok", "Facebook", "Google"];

  return (
    <div className="w-full relative bg-white shadow border-b-2 border-gray-100 bg-zinc-100">
      <div className="flex items-center justify-between">
        <Link to="home">
          <img
            className="h-8 w-auto sm:h-20 ml-1"
            src={Logo}
            alt="Happy Shop Logo"
          />
        </Link>

        <div className="flex items-center ">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="Busque aqui" />
            )}
          />
        </div>

        <div className="flex space-x-4 mr-2.5">
          <Link to="Favoritos">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <AiFillHeart size="2rem" />
            </IconButton>
          </Link>

          <Link to="Carrinho">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <AiOutlineShoppingCart size="2rem" />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
