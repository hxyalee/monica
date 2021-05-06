const pageOneButtonClicks = () => {
  const buttons = document.querySelectorAll(".landing-page-link");
  // Bind event listeners for main event page buttons
  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      const contentBox = document.querySelector(".landing-page-link-content");
      if (idx == 0) {
        contentBox.innerText =
          'We have 9 years left to achieve the Sustainable Development Goals (SDG), a 2030 agenda created by the United Nations to achieve a sustainable future by combatting challenges including poverty, climate change, environmental degradation, peace and justice. Currently, child mortality is a major public health problem in developing countries. As part of the SDG number 3, Good Health and Wellbeing, the target is to reduce under-five mortality rate (U5MR) to at least 25 per 1,000 live births in every country ("Sustainable Development Goal 3: Health", 2021). How can we ensure that we are taking the right plan of action to reach this goal? ';
      }
      if (idx == 1)
        contentBox.innerText =
          "Child mortality is a key indicator for healthcare systems such as access to basic health interventions such as vaccines, medical treatment, adequate nutrition and clean water and sanitation. It is also a valuable indicator for social and economic development in understanding government implementation on poverty alleviation and citizen's welfare (“Under 5 Mortality”, 2020). There is a large disparity of children deaths in developing countries compared to high income countries. Reducing these inequalities and strengthening health care systems will be essential for lessening easily preventable child deaths. ";
      if (idx == 2)
        contentBox.innerText =
          'There has been remarkable progress towards decreasing child mortality rates with the global under-five mortality rate declining by 59% ("Under 5 Mortality", 2020). These rates were reduced through increasing coverage of immunisation and reducing infectious diseases. However progress has been uneven because child mortality still remains a critical issue in health and well-being in low income countries.';
    });
  });
};

// Create circles for "graph" on the third page
const thirdContentFigure = () => {
  const africaContainer = document.querySelector(".third-africa");
  // 13 circles
  for (let i = 0; i < 13; i++) {
    const circle = document.createElement("div");
    if (i == 0) {
      circle.className = "circle-selected";
    } else {
      circle.className = "circle";
    }
    africaContainer.appendChild(circle);
  }

  const worldContainer = document.querySelector(".third-aus");
  // 264 Circles
  for (let i = 0; i < 264; i++) {
    const circle = document.createElement("div");
    if (i == 0) {
      circle.className = "small-circle-selected";
    } else {
      circle.className = "small-circle";
    }
    worldContainer.appendChild(circle);
  }
  // Bind mouse events for hovering on the "graph" container
  // Set the x and y coordinates of the popup
  africaContainer.addEventListener("mouseenter", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    let popup = document.querySelector(".popup-africa");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "popup-africa";
      popup.innerText = "1 in 13 children die before the age of 5";
      africaContainer.appendChild(popup);
    }
    popup.style.position = "absolute";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
  });
  africaContainer.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    let popup = document.querySelector(".popup-africa");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "popup-africa";
      popup.innerText = "1 in 13 children die before the age of 5";
      africaContainer.appendChild(popup);
    }
    popup.style.position = "absolute";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
  });
  africaContainer.addEventListener("mouseleave", (event) => {
    let popup = document.querySelector(".popup-africa");
    popup.parentElement.removeChild(popup);
  });

  // Bind mouse events for hovering on the "graph" container
  // Set the x and y coordinates of the popup
  worldContainer.addEventListener("mouseenter", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    let popup = document.querySelector(".popup-world");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "popup-world";
      popup.innerText = "1 in 264 children die before the age of 5";
      worldContainer.appendChild(popup);
    }
    popup.style.position = "absolute";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
  });
  worldContainer.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    let popup = document.querySelector(".popup-world");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "popup-world";
      popup.innerText = "1 in 264 children die before the age of 5";
      worldContainer.appendChild(popup);
    }
    popup.style.position = "absolute";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
  });
  worldContainer.addEventListener("mouseleave", (event) => {
    let popup = document.querySelector(".popup-world");
    popup.parentElement.removeChild(popup);
  });
};

const eightContentRender = () => {
  const buttons = document.querySelectorAll(".eight-button");
  // Bind click handlers for the buttons
  // And render respective graphs
  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("eight-selected"));
      button.classList.add("eight-selected");
      const happen = document.querySelector(".eight-happen p");
      const matter = document.querySelector(".eight-matter p");
      switch (idx) {
        case 0:
          maternalHealth();
          happen.innerText =
            'Sub-Saharan Africa has the highest maternal mortality rate (MMR) among the world, Chad being the most dangerous country to give birth in (Suzuki & Kashiwase, 2019). These deaths are caused by complications such as severe bleeding, infections, complications during delivery and unsafe abortion. “Fewer than half of all births (in this region) are assisted by such skilled health personnel” due to the lack of access to quality health services and emergency care ("Maternal mortality", 2019). ';
          matter.innerText =
            'As part of the SDG 3, they aim to “reduce the global MMR to less than 70 per 100 000 births”, which is far from where Sub Saharan Africa is currently at. The result of maternal death arise from complications that develop during pregnancy are mostly preventable or treatable by simply providing accessible health care solutions. ("Maternal mortality", 2019). Therefore, it is crucial to prioritise eliminating barriers in the healthcare system such as lack of information, poor quality services and distance to facilities to improve maternal health.';
          break;
        case 1:
          underWeight();
          happen.innerText =
            "Malnutrition accounts for 54% of child deaths in Africa (Bryce, Boschi-Pinto, Shibuya & Black, 2005), making it the underlying cause to children mortality. This can be deduced through the strong correlation of higher malnourished child population with countries of high child mortality rates. One of the main contributing factors to malnutrition is pneumonia that occur from child wasting, air pollution and poverty (Roser, Ritchie & Dadonaite, 2021), therefore these issues are prominent in lower income countries. ";
          matter.innerText =
            "The fact that these diseases could be easily preventable by providing more immediate access to skilled health professionals shows the urgency for improvement in their healthcare system, offering vaccines and promoting breastfeeding. In the long term, improving accessiblity to water, sanitation and hygiene is also crucial in reducing diarrhea which is responsbile for a large amount of child deaths (Shoo, 2021). ";
          break;
        case 2:
          GPI();
          happen.innerText =
            "There is a high inequality regarding female education in low income countries with high child mortality rates. Females are not receiving adequate education to understand pre-and-post-natal healthcare, contraceptive use and disease prevention, hence resulting in a higher child mortality rate (Acheampong, Ejiofor, Salinas- Miranda, Wall & Yu, 2019). Recent study shows that women’s education was positively associated with utilising heatlh services such as receiving antenatal care and having a skilled birth attendent during delivery (Van Malderen et al., 2019)";
          matter.innerText =
            "It is critical to recognize the importance and benefits of investing in education to provide a sustainable solution to reducing child mortality. Providing maternal knowledge will promote taking proper care of their children and knowing the appropriate time to seek for professional medical help. Maternal education will also increase involvement in family planning and demand for quality health services such as institutional delivery (Kiross, Chojenta, Barker, Tiruye & Loxton, 2019).";
          break;
        case 3:
          postnaternal();
          happen.innerText =
            "Sub-Saharan regions have a drastically lower number of births that were assisted by healthcare professionals compared to other regions with a lower mortality rate. The inadequate attention to antenatal and/or postnatal care can be associated to poor maternal knowledge mothers employed in manual work, and low household wealth. For example, households with poorly built kitchens have high exposure to air pollution which creates adverse health effects to children under 5, thereby causing a higher mortality rate (Bickton et al., 2020). ";
          matter.innerText =
            'Having a skilled health personnel available to assist in child birth is essential and to reducing maternal and newborn mortality. They are able to prevent complications that occur during childbirth such as haemorrhages, which is one of the leading causes of maternal deaths ("Delivery care", 2021). Implementing a community newborn care package that offers support for breastfeeding mothers, extra care for underweight babies is a great cost-effective solution (Shoo, 2021). Increasing professional assistance for childbirth is also included under one of the targets for goal 3 of SDG.';
          break;
      }
    });
  });
};

// Create a world map with mortality rates
const worldMap = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Child%20mortality%2C%201950-2017%20(IHME%2C%202017).csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }

      const filtered = rows.filter((row) => row["Year"] == 2017);

      var data = [
        {
          type: "choropleth",
          locationmode: "country names",
          locations: unpack(filtered, "Country"), // Get all countries
          z: unpack(filtered, "Mortality"), // Get mortality rates
          text: unpack(filtered, "Country"),
          autocolorscale: true,
        },
      ];

      // Set layout stuff
      var layout = {
        title: "Global Under 5 Child mortality rates (2017)",
        width: 800,
        height: 400,
        paper_bgcolor: "rgba(0,0,0,0)",
        geo: {
          projection: {
            type: "robinson",
          },
        },
      };
      // Append to container
      const container = document.querySelector(".second-graph");
      Plotly.newPlot(container, data, layout, { showLink: false });
    }
  );
};

// Generate bar graph
const barGraph = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Child%20mortality%2C%201950-2017%20(IHME%2C%202017).csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }

      // Filter to all countries in aftrica and year of 2017
      let african = rows.filter(
        (row) => row["Continent"] == "Africa" && row["Year"] == 2017
      );
      // Sort by mortality ascending
      african = african.sort((a, b) => a["Mortality"] - b["Mortality"]);
      // Extract all countries and mortality
      const allCountries = african.map((country) => country["Country"]);
      const allMortality = african.map((country) => country["Mortality"]);
      // Initialise firsttrace
      var trace1 = {
        x: allCountries,
        y: allMortality,
        type: "bar",
        name: "country",
        text: allMortality.map(String),
        textposition: "auto",
        hoverinfo: "none",
        marker: {
          color: "#2ecee8",
          line: {
            color: "#333",
            opacity: 0.5,
          },
        },
      };
      // "Threshold" line on the graph
      var trace2 = {
        x: allCountries,
        y: new Array(allCountries.length).fill(25),
        mode: "lines",
        marker: {
          color: "rgb(255,112,65)",
          width: 100,
        },
        name: "target",
      };

      var data = [trace1, trace2];
      // Initialise layout
      var layout = {
        barmode: "stack",
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        font: {
          color: "#eee",
        },
        marker: {
          line: {
            color: "#333",
          },
          color: "#666666",
        },
        legend: {
          x: 0.5,
          xanchor: "center",
          y: -1,
          yanchor: "center",
        },
      };
      const container = document.querySelector(".fifth-graph");
      Plotly.newPlot(container, data, layout);
    }
  );
};

// Linear regressor
const predictor1 = () => {
  function make_plot(csv_data) {
    const morocco = csv_data.filter((d) => d["Country"] == "Morocco");
    const tunisia = csv_data.filter((d) => d["Country"] == "Tunisia");

    const arr = [morocco, tunisia];
    const mortality_data = arr.map((el) => {
      let mort = el.map((d) => Number(d["Mortality"]));
      let min = Math.min(...mort);
      let max = Math.max(...mort);
      return {
        mortality: mort,
        min,
        max,
        ...el,
      };
    });
    //To normalise our data, we need to know the minimum and maximum values
    //Math.min doesn't work with strings so we need to convert

    const regression_data = mortality_data.map((el) => {
      let obj = {};
      const keys = Object.keys(el);
      keys.forEach((key) => {
        if (key == "morality" || key == "min" || key == "max") return;
        //This regression library needs values stored in arrays
        //We are using the strech function to normalise our data
        const data = [
          stretch(el[key]["Year"], 1950, 2017, 0, 1),
          stretch(parseFloat(el[key]["Mortality"]), el["min"], el["max"], 0, 1),
        ];
        obj[el[key]["Year"]] = data;
      });
      return obj;
    });

    const regressionResults = regression_data.map((el) => {
      let arr = [];
      let keys = Object.keys(el);
      keys = keys.filter((key) => key !== "undefined");
      keys.forEach((key) => arr.push(el[key]));

      //Here is where we train our regressor, experiment with the order value
      return regression.polynomial(arr, {
        order: 3.5,
      });
    });
    //Now we have a trained predictor, lets actually use it!
    let extension_x = [];
    let extension_y = [];

    regressionResults.forEach((el, idx) => {
      let objX = [];
      let objY = [];
      for (let year = 2017; year <= 2030; year++) {
        //We've still got to work in the normalised scale
        let prediction = el.predict(stretch(year, 1950, 2017, 0, 1))[1];

        objX.push(year);
        //Make sure to un-normalise for displaying on the plot
        let min;
        let max;
        switch (idx) {
          case 0:
            min = mortality_data[0]["min"];
            max = mortality_data[0]["max"];
            break;
          case 1:
            min = mortality_data[1]["min"];
            max = mortality_data[1]["max"];
            break;
        }

        objY.push(stretch(prediction, 0, 1, min, max));
      }
      extension_x.push(objX);
      extension_y.push(objY);
    });
    // Set data labels
    let data = arr.map((el, idx) => {
      let name;
      let color;
      switch (idx) {
        case 0:
          name = "Morocco";
          color = "#219EBC";
          break;
        case 1:
          name = "Tunisia";
          color = "#58B4D1";
          break;
      }
      return {
        x: el.map((d) => d["Year"]),
        y: el.map((d) => d["Mortality"]),
        name,
        mode: "lines",
        line: { color, shape: "spline" },
      };
    });
    for (let i = 0; i < extension_x.length; i++) {
      let name;
      let color;
      switch (i) {
        case 0:
          name = "Morocco";
          color = "#219EBC";
          break;
        case 1:
          name = "Tunisia";
          color = "#58B4D1";
          break;
      }
      data.push({
        x: extension_x[i],
        y: extension_y[i],
        name: name + " Predicted",
        mode: "lines",
        line: { color, shape: "spline", dash: "dot" },
      });
    }
    let target = arr.map((e) => {
      let years = arr[0].map((d) => d["Year"]);
      return {
        x: [...years, ...extension_x[0]],
        y: new Array(years.length + extension_x[0].length).fill(25),
        name: "target",
        mode: "lines",
        line: {
          color: "rgb(255,112,65)",
        },
      };
    });
    target = target[0];
    console.log(target);
    data.push(target);
    var layout = {
      height: 300,
      title: "Comparing Child Mortality Rates in North Africa (1950 - 2030)",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      font: {
        color: "#eee",
      },
      marker: {
        line: {
          color: "#666666",
        },
        color: "#666666",
      },
    };
    const conainter = document.querySelector(".g1");
    Plotly.newPlot(conainter, data, layout);
  }

  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Child%20mortality%2C%201950-2017%20(IHME%2C%202017).csv",
    make_plot
  );

  //This stretch function is actually just the map function from p5.js
  function stretch(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }
};

const predictor2 = () => {
  function make_plot(csv_data) {
    const chad = csv_data.filter((d) => d["Country"] == "Chad");
    const centralAfrica = csv_data.filter(
      (d) => d["Country"] == "Central African Republic"
    );
    const arr = [chad, centralAfrica];

    //To normalise our data, we need to know the minimum and maximum values
    //Math.min doesn't work with strings so we need to convert
    const mortality_data = arr.map((el) => {
      let mort = el.map((d) => Number(d["Mortality"]));
      let min = Math.min(...mort);
      let max = Math.max(...mort);
      return {
        mortality: mort,
        min,
        max,
        ...el,
      };
    });

    const regression_data = mortality_data.map((el) => {
      let obj = {};
      const keys = Object.keys(el);
      keys.forEach((key) => {
        if (key == "morality" || key == "min" || key == "max") return;

        //This regression library needs values stored in arrays
        //We are using the strech function to normalise our data
        const data = [
          stretch(el[key]["Year"], 1950, 2017, 0, 1),
          stretch(parseFloat(el[key]["Mortality"]), el["min"], el["max"], 0, 1),
        ];
        obj[el[key]["Year"]] = data;
      });
      return obj;
    });

    const regressionResults = regression_data.map((el) => {
      let arr = [];
      let keys = Object.keys(el);
      keys = keys.filter((key) => key !== "undefined");
      keys.forEach((key) => arr.push(el[key]));
      //Here is where we train our regressor, experiment with the order value
      return regression.polynomial(arr, {
        order: 3,
      });
    });
    //Now we have a trained predictor, lets actually use it!
    let extension_x = [];
    let extension_y = [];

    regressionResults.forEach((el, idx) => {
      let objX = [];
      let objY = [];
      for (let year = 2017; year <= 2030; year++) {
        //We've still got to work in the normalised scale
        let prediction = el.predict(stretch(year, 1950, 2017, 0, 1))[1];

        objX.push(year);
        //Make sure to un-normalise for displaying on the plot
        let min;
        let max;
        switch (idx) {
          case 0:
            min = mortality_data[0]["min"];
            max = mortality_data[0]["max"];
            break;
          case 1:
            min = mortality_data[1]["min"];
            max = mortality_data[1]["max"];
            break;
        }

        objY.push(stretch(prediction, 0, 1, min, max));
      }
      extension_x.push(objX);
      extension_y.push(objY);
    });

    // Set label for graph
    let data = arr.map((el, idx) => {
      let name;
      let color;
      switch (idx) {
        case 0:
          name = "Chad";
          color = "#FB8500";

          break;

        case 1:
          name = "Central African Republic";
          color = "#FFB703";
          break;
      }
      return {
        x: el.map((d) => d["Year"]),
        y: el.map((d) => d["Mortality"]),
        name,
        mode: "lines",
        line: { color, shape: "spline" },
      };
    });

    for (let i = 0; i < extension_x.length; i++) {
      let name;
      let color;
      switch (i) {
        case 0:
          name = "Chad";
          color = "#FB8500";
          break;
        case 1:
          name = "Central African Republic";
          color = "#FFB703";
          break;
      }
      data.push({
        x: extension_x[i],
        y: extension_y[i],
        name: name + " Predicted",
        mode: "lines",
        line: {
          color,
          dash: "dot",
          shape: "spline",
        },
      });
    }

    let target = arr.map((e) => {
      let years = arr[0].map((d) => d["Year"]);
      return {
        x: [...years, ...extension_x[0]],
        y: new Array(years.length + extension_x[0].length).fill(25),
        name: "target",
        mode: "lines",
        line: {
          color: "rgb(255,112,65)",
        },
      };
    });
    target = target[0];
    console.log(target);
    data.push(target);

    var layout = {
      height: 300,
      title:
        "Comparing Child Mortality Rates in Sub Saharan Africa (1950 - 2030)",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      font: {
        color: "#eee",
      },
      marker: {
        line: {
          color: "#666666",
        },
        color: "#666666",
      },
    };
    const container = document.querySelector(".g2");
    Plotly.newPlot(container, data, layout);
  }

  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Child%20mortality%2C%201950-2017%20(IHME%2C%202017).csv",
    make_plot
  );

  //This stretch function is actually just the map function from p5.js
  function stretch(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }
};

// Generate the underweight graph
const underWeight = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/share-of-children-younger-than-5-who-are-underweight-for-their-age.csv",
    (rows) => {
      // Filter the dataset for only the four countries listed below
      const data = rows.filter(
        (row) =>
          row["Entity"] == "Chad" ||
          row["Entity"] == "Central African Republic" ||
          row["Entity"] == "Morocco" ||
          row["Entity"] == "Tunisia"
      );
      // Extract the only relevant data: year and underweight percentage
      const clean = {
        Chad: { year: [], data: [] },
        Morocco: { year: [], data: [] },
        Tunisia: { year: [], data: [] },
        "Central African Republic": { year: [], data: [] },
      };
      data.forEach((country) => {
        clean[country["Entity"]].year.push(country.Year);
        clean[country["Entity"]].data.push(
          country[
            "Prevalence of underweight, weight for age (% of children under 5)"
          ]
        );
      });
      // Get all countries
      const countries = Object.keys(clean);
      // Set colors for each lines in graph
      const graphData = countries.map((country) => {
        let color;
        switch (country) {
          case "Chad":
            color = "#FB8500";
            break;
          case "Central African Republic":
            color = "#FFB703";
            break;
          case "Morocco":
            color = "#219EBC";
            break;
          case "Tunisia":
            color = "#58B4D1";
            break;
        }
        // Data for line graph
        return {
          x: clean[country].year,
          y: clean[country].data,
          name: country,
          line: {
            color: color,
          },

          mode: "lines",
        };
      });

      // Initialise layout
      var layout = {
        title:
          "Share of children who are underweight for their age (1987 to 2016)",
        paper_bgcolor: "rgba(0, 0, 0,0)",
        plot_bgcolor: "rgba(0, 0, 0,0)",
        width: 700,
        font: {
          color: "#333",
        },
        marker: {
          line: {
            color: "#333",
          },
          color: "#333",
        },
      };

      const container = document.querySelector(".eight-graph-container");
      Plotly.newPlot(container, graphData, layout);
    }
  );
};

// Generate graph for GPI
const GPI = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/gpi-tertiary-education.csv",
    (rows) => {
      // Filter the dataset for only the four countries listed below
      const data = rows.filter(
        (row) =>
          row["Entity"] == "Chad" ||
          row["Entity"] == "Central African Republic" ||
          row["Entity"] == "Morocco" ||
          row["Entity"] == "Tunisia"
      );
      // Extract the only relevant data: year and underweight percentage
      const clean = {
        Chad: { year: [], data: [] },
        Morocco: { year: [], data: [] },
        Tunisia: { year: [], data: [] },
        "Central African Republic": { year: [], data: [] },
      };
      data.forEach((country) => {
        clean[country["Entity"]].year.push(country.Year);
        clean[country["Entity"]].data.push(
          country["Gross enrolment ratio, tertiary, gender parity index (GPI)"]
        );
      });
      // Get all countries
      const countries = Object.keys(clean);
      // Set colors for each lines in graph
      const graphData = countries.map((country) => {
        let color;
        switch (country) {
          case "Chad":
            color = "#FB8500";
            break;
          case "Central African Republic":
            color = "#FFB703";
            break;
          case "Morocco":
            color = "#219EBC";
            break;
          case "Tunisia":
            color = "#58B4D1";
            break;
        }
        return {
          x: clean[country].year,
          y: clean[country].data,
          name: country,
          line: {
            color: color,
          },
          marker: {
            color: color,
          },
          mode: "lines",
        };
      });
      // Set layout of the graph
      var layout = {
        title:
          "Gross enrolment ratio, tertiary, gender parity index (GPI) (1971 to 2014)",
        paper_bgcolor: "rgba(0, 0, 0,0)",
        plot_bgcolor: "rgba(0, 0, 0,0)",
        width: 700,
        font: {
          color: "#333",
        },
      };

      const container = document.querySelector(".eight-graph-container");
      Plotly.newPlot(container, graphData, layout);
    }
  );
};

// Generate graph for maternal health
const maternalHealth = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Maternal%20mortality%20ratio%20map%2C%202017.csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }
      let clean = { name: [], z: [] };
      // List of all african countries
      const AFRICA_COUNTRY = [
        "Algeria",
        "Angola",
        "Benin",
        "Botswana",
        "Burkina Faso",
        "Burundi",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Congo",
        "Djibouti",
        "Egypt",
        "Equatorial Guinea",
        "Eritrea",
        "Ethiopia",
        "Gabon",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Kenya",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mauritius",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Niger",
        "Nigeria",
        "Rwanda",
        "Sao Tome and Principe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sudan",
        "Swaziland",
        "Togo",
        "Tunisia",
        "Uganda",
        "Democratic Republic of the Congo",
        "Zimbabwe",
        "Côte d’Ivoire",
        "Zambia",
        "Congo",
        "South Sudan",
        "Uganda",
        "Tanzania",
        "Malawi",
      ];
      // Extract only african countries
      for (let i = 0; i < rows.length; i++) {
        if (AFRICA_COUNTRY.includes(rows[i]["Country"])) {
          clean.name.push(rows[i]["Country"]);
          clean.z.push(parseFloat(rows[i]["Maternal mortality"]));
        }
      }
      // Initialise map with the data given
      var data = [
        {
          type: "choropleth",
          locationmode: "country names",
          locations: clean.name,
          z: clean.z,
          text: clean.name,
          colorscale: [
            [0, "#5099B4"],
            [0.35, "#6FB2CD"],
            [0.5, "#BCEOFO"],
            [0.75, "#FFB703"],
            [1, "#FB8500"],
          ],
          autocolorscale: false,
        },
      ];
      // Initialise kayout of the map
      var layout = {
        title: "Maternal mortality rates (2017)",
        width: 600,
        height: 500,
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)",
        geo: {
          //   projection: {
          //     type: "robinson",
          //   },
          scope: "africa",
          showlakes: false,
          showframe: false,
          lakecolor: "white",
        },
      };
      const container = document.querySelector(".eight-graph-container");
      Plotly.newPlot(container, data, layout, { showLink: false });
    }
  );
};

// Generate postnaternal graph
const postnaternal = () => {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Births%20attended%20by%20skilled%20health%20personnel.csv",
    function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }
      let clean = { name: [], z: [], code: [] };
      const AFRICA_COUNTRY = [
        "Algeria",
        "Angola",
        "Benin",
        "Botswana",
        "Burkina Faso",
        "Burundi",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Congo",
        "Djibouti",
        "Egypt",
        "Equatorial Guinea",
        "Eritrea",
        "Ethiopia",
        "Gabon",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Kenya",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mauritius",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Niger",
        "Nigeria",
        "Rwanda",
        "Sao Tome and Principe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sudan",
        "Swaziland",
        "Togo",
        "Tunisia",
        "Uganda",
        "Democratic Republic of the Congo",
        "Zimbabwe",
        "Côte d’Ivoire",
        "Zambia",
        "Congo",
        "South Sudan",
        "Uganda",
        "Tanzania",
        "Malawi",
      ];
      // Extract only african countries
      for (let i = 0; i < rows.length; i++) {
        if (AFRICA_COUNTRY.includes(rows[i]["Country"])) {
          clean.name.push(rows[i]["Country"]);
          clean.z.push(parseFloat(rows[i]["SAB (%)"]));
          clean.code.push(rows[i]["ISO"]);
        }
      }
      // Initialise graph data
      var data = [
        {
          type: "choropleth",
          locations: clean.code,
          z: clean.z,
          text: clean.name,
          colorscale: [
            [0, "#5099B4"],
            [0.35, "#6FB2CD"],
            [0.5, "#BCEOFO"],
            [0.75, "#FFB703"],
            [1, "#FB8500"],
          ],
          autocolorscale: false,
        },
      ];

      // Initiialise layout of the map
      var layout = {
        title: "Proportion of births attended by skilled birth attendant",
        width: 600,
        height: 500,
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)",
        geo: {
          //   projection: {
          //     type: "robinson",
          //   },
          scope: "africa",
          showlakes: false,
          showframe: false,
          lakecolor: "white",
        },
      };
      const container = document.querySelector(".eight-graph-container");
      Plotly.newPlot(container, data, layout, { showLink: false });
    }
  );
};

//Generate child mortality map for africa
const childMortalityAfrica = () => {
  let url =
    "https://raw.githubusercontent.com/monicatsuii/childmortality/main/Child%20mortality%2C%201950-2017%20(IHME%2C%202017).csv";
  Plotly.d3.csv(url, function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    // Clean the data to only have countries from Africa and year of 2017
    let countries = rows.filter(
      (row) => row["Continent"] == "Africa" && row["Year"] == 2017
    );
    // Initialise map and its data
    var data = [
      {
        type: "choropleth",
        locations: countries.map((c) => c["Country"]),
        locationmode: "country names",
        z: countries.map((c) => c["Mortality"]),
        text: countries.map((c) => c["Country"]),
        colorscale: [
          [0, "#5099B4"],
          [0.35, "#6FB2CD"],
          [0.5, "#BCEOFO"],
          [0.75, "#FFB703"],
          [1, "#FB8500"],
        ],
        showlegend: false,
        autocolorscale: false,
      },
    ];
    // Initialise the layout of the graph
    var layout = {
      title: "Under 5 Mortality Rate (per 1000 live births)",
      width: 600,
      height: 500,
      plot_bgcolor: "rgba(0,0,0,0)",
      paper_bgcolor: "rgba(0,0,0,0)",
      bgColor: "rgba(0,0,0,0)",

      font: {
        color: "#eee",
      },
      color: "#eee",
      geo: {
        //   projection: {
        //     type: "robinson",
        //   },
        scope: "africa",
        showlakes: false,
        showframe: false,
        lakecolor: "white",
        bgColor: "rgba(0,0,0,0)",
        showlegend: false,
      },
      legend: {
        x: 0.5,
        xanchor: "center",
        y: -1,
      },
      showlegend: false,
    };
    const container = document.querySelector(".sixth-graph");
    Plotly.newPlot(container, data, layout, { showLink: false });
    const hoverLayer = document.querySelector(".sixth-graph .hoverlayer");
    const geoLayer = document.querySelector(".sixth-graph .geolayer");

    // Highlight the relevant country details on country hover
    geoLayer.addEventListener("mousemove", () => {
      const text = hoverLayer.querySelectorAll(".line");
      const country = text[1].innerHTML;
      const els = document.querySelectorAll(".sixth-text-element");
      els.forEach((e) => e.classList.remove("sixth-selected"));
      if (country == "Morocco") {
        els[0].classList.add("sixth-selected");
      } else if (country == "Tunisia") {
        els[1].classList.add("sixth-selected");
      } else if (country == "Central African Republic") {
        els[2].classList.add("sixth-selected");
      } else if (country == "Chad") {
        els[3].classList.add("sixth-selected");
      }
    });
  });
};

pageOneButtonClicks();

thirdContentFigure();

eightContentRender();

worldMap();

barGraph();

predictor1();
predictor2();

childMortalityAfrica();

maternalHealth();
