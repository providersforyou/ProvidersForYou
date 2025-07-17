// Provider Database for ZIP Code Lookup
const zipToProviders = {
    // California ZIP codes
    "90210": ["AT&T", "Frontier", "Optimum"],
    "90211": ["AT&T", "Frontier", "WOW"],
    "94102": ["AT&T", "Brightspeed", "Optimum"],
    "94103": ["AT&T", "Brightspeed", "Kinetic"],
    "90401": ["AT&T", "Frontier", "Optimum"],
    
    // New York ZIP codes
    "10001": ["Optimum", "AT&T", "Brightspeed"],
    "10002": ["Optimum", "AT&T", "WOW"],
    "10003": ["Optimum", "AT&T", "Kinetic"],
    "11201": ["Optimum", "AT&T", "Frontier"],
    "11202": ["Optimum", "Brightspeed", "WOW"],
    
    // Texas ZIP codes
    "75201": ["AT&T", "Frontier", "Brightspeed"],
    "75202": ["AT&T", "Kinetic", "Optimum"],
    "77001": ["AT&T", "Frontier", "WOW"],
    "77002": ["AT&T", "Brightspeed", "Kinetic"],
    "78701": ["AT&T", "Frontier", "Optimum"],
    
    // Florida ZIP codes
    "33101": ["AT&T", "Brightspeed", "Optimum"],
    "33102": ["AT&T", "Frontier", "WOW"],
    "32801": ["AT&T", "Brightspeed", "Kinetic"],
    "32802": ["AT&T", "Frontier", "Optimum"],
    "33301": ["Brightspeed", "AT&T", "WOW"],
    
    // Illinois ZIP codes
    "60601": ["AT&T", "WOW", "Optimum"],
    "60602": ["AT&T", "Kinetic", "Brightspeed"],
    "60603": ["AT&T", "Frontier", "WOW"],
    
    // Washington ZIP codes
    "98101": ["Ziply", "AT&T", "Brightspeed"],
    "98102": ["Ziply", "AT&T", "Optimum"],
    "98103": ["Ziply", "Kinetic", "WOW"],
    "98104": ["Ziply", "AT&T", "Frontier"],
    
    // Additional ZIP codes for broader coverage
    "30301": ["AT&T", "Brightspeed", "WOW"],
    "30302": ["AT&T", "Frontier", "Optimum"],
    "85001": ["AT&T", "CenturyLink", "Brightspeed"],
    "85002": ["AT&T", "CenturyLink", "Kinetic"],
    "80201": ["CenturyLink", "AT&T", "Brightspeed"],
    "80202": ["CenturyLink", "AT&T", "WOW"],
    "97201": ["Ziply", "CenturyLink", "AT&T"],
    "97202": ["Ziply", "CenturyLink", "Brightspeed"],
    "44101": ["AT&T", "WOW", "Brightspeed"],
    "44102": ["AT&T", "WOW", "Kinetic"],
    "19101": ["Optimum", "AT&T", "Brightspeed"],
    "19102": ["Optimum", "AT&T", "WOW"],
    "02101": ["Optimum", "AT&T", "Brightspeed"],
    "02102": ["Optimum", "AT&T", "Kinetic"],
    "20001": ["Optimum", "AT&T", "WOW"],
    "20002": ["Optimum", "AT&T", "Brightspeed"],
    "48201": ["AT&T", "WOW", "Brightspeed"],
    "48202": ["AT&T", "WOW", "Kinetic"],
    "63101": ["AT&T", "Brightspeed", "WOW"],
    "63102": ["AT&T", "Brightspeed", "Kinetic"],
    "27601": ["AT&T", "Brightspeed", "Frontier"],
    "27602": ["AT&T", "Brightspeed", "WOW"],
    "37201": ["AT&T", "Brightspeed", "WOW"],
    "37202": ["AT&T", "Brightspeed", "Kinetic"],
    "35201": ["AT&T", "Brightspeed", "WOW"],
    "35202": ["AT&T", "Brightspeed", "Kinetic"],
    "70112": ["AT&T", "Optimum", "Brightspeed"],
    "70113": ["AT&T", "Optimum", "WOW"],
    "73101": ["AT&T", "Brightspeed", "WOW"],
    "73102": ["AT&T", "Brightspeed", "Kinetic"],
    "87101": ["CenturyLink", "AT&T", "Brightspeed"],
    "87102": ["CenturyLink", "AT&T", "WOW"],
    "84101": ["CenturyLink", "AT&T", "Brightspeed"],
    "84102": ["CenturyLink", "AT&T", "Kinetic"],
    "89101": ["CenturyLink", "AT&T", "Brightspeed"],
    "89102": ["CenturyLink", "AT&T", "WOW"],
    "59101": ["CenturyLink", "Brightspeed", "AT&T"],
    "59102": ["CenturyLink", "Brightspeed", "Kinetic"],
    "58101": ["CenturyLink", "Brightspeed", "AT&T"],
    "58102": ["CenturyLink", "Brightspeed", "WOW"],
    "57101": ["CenturyLink", "Brightspeed", "AT&T"],
    "57102": ["CenturyLink", "Brightspeed", "Kinetic"],
    "50301": ["CenturyLink", "AT&T", "Brightspeed"],
    "50302": ["CenturyLink", "AT&T", "WOW"],
    "68101": ["CenturyLink", "AT&T", "Brightspeed"],
    "68102": ["CenturyLink", "AT&T", "Kinetic"],
    "66101": ["AT&T", "Brightspeed", "WOW"],
    "66102": ["AT&T", "Brightspeed", "Kinetic"],
    "72201": ["AT&T", "Brightspeed", "WOW"],
    "72202": ["AT&T", "Brightspeed", "Kinetic"],
    "25301": ["Frontier", "AT&T", "Brightspeed"],
    "25302": ["Frontier", "AT&T", "WOW"],
    "40601": ["AT&T", "Brightspeed", "WOW"],
    "40602": ["AT&T", "Brightspeed", "Kinetic"],
    "46201": ["AT&T", "Brightspeed", "WOW"],
    "46202": ["AT&T", "Brightspeed", "Kinetic"],
    "53201": ["AT&T", "WOW", "Brightspeed"],
    "53202": ["AT&T", "WOW", "Kinetic"],
    "55101": ["CenturyLink", "AT&T", "Brightspeed"],
    "55102": ["CenturyLink", "AT&T", "WOW"],
    "04101": ["Optimum", "Brightspeed", "AT&T"],
    "04102": ["Optimum", "Brightspeed", "Kinetic"],
    "03301": ["Optimum", "Brightspeed", "AT&T"],
    "03302": ["Optimum", "Brightspeed", "WOW"],
    "05601": ["Brightspeed", "AT&T", "Optimum"],
    "05602": ["Brightspeed", "AT&T", "Kinetic"],
    "06101": ["Optimum", "AT&T", "Brightspeed"],
    "06102": ["Optimum", "AT&T", "WOW"],
    "02901": ["Optimum", "AT&T", "Brightspeed"],
    "02902": ["Optimum", "AT&T", "Kinetic"],
    "07601": ["Optimum", "AT&T", "Brightspeed"],
    "07602": ["Optimum", "AT&T", "WOW"],
    "17101": ["Optimum", "AT&T", "Brightspeed"],
    "17102": ["Optimum", "AT&T", "Kinetic"],
    "21201": ["Optimum", "AT&T", "Brightspeed"],
    "21202": ["Optimum", "AT&T", "WOW"],
    // Satellite coverage areas (nationwide)
    "99501": ["HughesNet", "AT&T", "Brightspeed"],
    "99502": ["HughesNet", "AT&T", "WOW"],
    "96801": ["HughesNet", "AT&T", "Brightspeed"],
    "96802": ["HughesNet", "AT&T", "Kinetic"],
    
    // Sample test ZIP codes
    "12345": ["Frontier", "Earthlink", "HughesNet", "AT&T"],
    "54321": ["Optimum", "Spectrum", "CenturyLink", "Brightspeed"],
    "99999": ["Windstream", "HughesNet", "Ziply", "AT&T"]
};

// Provider details with features and logos
const providerDetails = {
    "AT&T": {
        name: "AT&T",
        logo: "AT&T.png",
        features: ["Fiber Internet", "5G Network", "Unlimited Data", "24/7 Support"],
        type: "Fiber/DSL"
    },
    "Frontier": {
        name: "Frontier",
        logo: "Frontier.png",
        features: ["Fiber Internet", "No Data Caps", "Free Wi-Fi Router", "Local Support"],
        type: "Fiber"
    },
    "Optimum": {
        name: "Optimum",
        logo: "optimum.png",
        features: ["Cable Internet", "High Speeds", "Wi-Fi Hotspots", "Bundle Deals"],
        type: "Cable"
    },
    "Brightspeed": {
        name: "Brightspeed",
        logo: "brightspeed.svg",
        features: ["Fiber Internet", "Reliable Service", "Local Support", "Competitive Pricing"],
        type: "Fiber"
    },
    "WOW": {
        name: "WOW! Internet",
        logo: "WOW_Logo_SVG.svg",
        features: ["Cable Internet", "No Contracts", "Free Installation", "24/7 Support"],
        type: "Cable"
    },
    "Kinetic": {
        name: "Kinetic by Windstream",
        logo: "KineticByWindstream.jpg",
        features: ["Fiber Internet", "Unlimited Data", "Wi-Fi Equipment", "Local Service"],
        type: "Fiber"
    },
    "CenturyLink": {
        name: "CenturyLink",
        logo: "centurylink.svg",
        features: ["DSL Internet", "Price for Life", "No Data Caps", "Professional Installation"],
        type: "DSL/Fiber"
    },
    "Ziply": {
        name: "Ziply Fiber",
        logo: "ziply-svg-logo.svg",
        features: ["Fiber Internet", "Gigabit Speeds", "No Data Caps", "Local Support"],
        type: "Fiber"
    },
    "HughesNet": {
        name: "HughesNet",
        logo: "hughesnet.svg",
        features: ["Satellite Internet", "Nationwide Coverage", "Built-in Wi-Fi", "Professional Installation"],
        type: "Satellite"
    },
    "Earthlink": {
        name: "EarthLink",
        logo: "Earthlink.jpg",
        features: ["Various Technologies", "No Data Caps", "Award-winning Support", "Flexible Plans"],
        type: "Multiple"
    },
    "Spectrum": {
        name: "Spectrum",
        logo: "spectrum.png",
        features: ["Cable Internet", "No Data Caps", "Free Modem", "24/7 Support"],
        type: "Cable"
    },
    "Windstream": {
        name: "Windstream",
        logo: "KineticByWindstream.jpg",
        features: ["Fiber Internet", "Unlimited Data", "Wi-Fi Equipment", "Local Service"],
        type: "Fiber"
    }
};

// Function to check availability by ZIP code
function checkAvailability(zipCode) {
    const providers = zipToProviders[zipCode];
    if (providers && providers.length > 0) {
        return providers.map(providerName => providerDetails[providerName]).filter(Boolean);
    }
    return null;
}

// Function to get all unique ZIP codes for testing
function getAllZipCodes() {
    return Object.keys(zipToProviders);
}

// Function to get random ZIP codes for demo
function getRandomZipCodes(count = 5) {
    const allZips = getAllZipCodes();
    const shuffled = allZips.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export functions for use in HTML pages
if (typeof window !== 'undefined') {
    window.ProvidersDB = {
        checkAvailability,
        getAllZipCodes,
        getRandomZipCodes,
        zipToProviders,
        providerDetails
    };
}
