export enum TenantEnum {
  princeGeorge = "princeGeorge",
  mackenzie = "mackenzie",
}

// Change depending on client installation
const currentTenant = TenantEnum.mackenzie;

const tenantConfig = {
  princeGeorge: {
    theme: {
      primaryColor: "#0e1c39",
      secondaryColor: "#2794d0",
      headerIconColor: "white",
      fabIconColor: "white",
      headerTextColor: "white",
      fontFamily: "Arial",
      fontWeight: "bold",
    },
    mapDetails: {
      latitude: 53.910704,
      longitude: -122.7819,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
      zoom: 11,
    },
    assets: {
      splashLogo: "./assets/princeGeorge/splashLogo.png",
      splashBackground: "./assets/princeGeorge/splashBackground.png",
    },
    appBarTitle: "Prince George Trails",
    apiEndpoint: "https://api.default-tenant.com",
  },
  //
  //
  //
  mackenzie: {
    theme: {
      primaryColor: "#788e37",
      secondaryColor: "#a9bf5f",
      fabIconColor: "white",
      headerTextColor: "white",
      fontFamily: "Times New Roman",
      fontWeight: "bold",
    },
    mapDetails: {
      latitude: 55.337146,
      longitude: -123.094989,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      zoom: 11,
    },
    assets: {
      splashLogo: "./assets/mackenzie/splashLogo.png",
      splashBackground: "./assets/mackenzie/splashBackground.png",
    },
    appBarTitle: "Mackenzie Trails",
    apiEndpoint: "https://api.another-tenant.com",
  },
  // Add more tenants as needed
};

// Pass the final tenant const to whichever file in the software needs tenant specific configurations
export const tenant = tenantConfig[currentTenant];
