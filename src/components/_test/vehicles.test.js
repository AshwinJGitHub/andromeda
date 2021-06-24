import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Vehicles from "../vehicles";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

describe("Vehicle List Test", () => {
  const useStyles = makeStyles(() => ({
    cardGrid: {
      // paddingTop: theme.spacing(8),
      // paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
  let vehicles;
  beforeEach(() => { });
  test("should render vehicle make", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      json: async () => [
        {
          id: "772a4375-f8cc-4572-a97a-2f09653f38cd",
          make: "Honda",
          model: "Accord",
          year: 2018,
          image: "https://source.unsplash.com/featured/?car,Accord,Honda",
          color: "Silver",
          price: "948.33",
          available: true,
        },
      ],
    });

    render(<Vehicles />);

    await waitFor(() => expect(screen.getByText("Honda")).toBeInTheDocument());
  });
});
