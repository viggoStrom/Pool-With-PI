/** @type {HTMLCanvasElement} */


class box {
    constructor(name, canvas, xPosition, sideLength, xVelocity, mass) {
        this.name = name
        this.canvas = canvas
        this.xPosition = xPosition
        this.xVelocity = xVelocity
        this.yPosition = 800
        this.width = sideLength
        this.mass = mass
        this.createInputGroup()
    }

    draw = () => {
        ctx.fillStyle = this.canvas.color.box
        ctx.fillRect(this.xPosition, this.yPosition - this.width, this.width, this.width)
        ctx.strokeStyle = this.canvas.color.gray
        ctx.strokeRect(this.xPosition, this.yPosition - this.width, this.width, this.width)
    }

    floatingText = () => {
        ctx.fillStyle = "white"
        ctx.font = "30px roboto mono"
        ctx.fillText(`${this.mass.toFixed(2)} kg`, this.xPosition, this.yPosition - 30 - this.width, this.width * 10)
        ctx.fillText(`${this.xVelocity.toFixed(2)} cm/s`, this.xPosition, this.yPosition - 70 - this.width, this.width * 10)
    }

    createInputGroup = () => {
        // create the parent <p> element with class "inputGroup"
        var inputGroup = document.createElement("p");
        inputGroup.className = "inputGroup";

        // create the <p> element containing the text "Box1"
        var name = document.createElement("p");
        name.innerHTML = this.name;

        // create the first <p> element containing the text "Mass 1:"
        var massLabel = document.createElement("p");
        massLabel.className = "inputLine";
        massLabel.innerHTML = "Mass: ";

        // create the first <input> element with class "inputField"
        this.massInput = document.createElement("input");
        this.massInput.className = "inputField";
        this.massInput.type = "text";

        // pre-fill the first <input> element with the value of this.mass
        this.massInput.value = this.mass;

        // give the input field an ID based on the box name
        this.massInput.id = this.name + "Mass";

        // append the first <input> element to the first <p> element
        massLabel.appendChild(this.massInput);

        // create the <span> element containing the units for the mass input
        var massUnits = document.createElement("span");
        massUnits.innerHTML = " kg";

        // append the units <span> element to the mass <p> element
        massLabel.appendChild(massUnits);

        // create the second <p> element containing the text "Velocity 1:"
        var velocityLabel = document.createElement("p");
        velocityLabel.className = "inputLine";
        velocityLabel.innerHTML = "Velocity: ";

        // create the second <input> element with class "inputField"
        this.velocityInput = document.createElement("input");
        this.velocityInput.className = "inputField";
        this.velocityInput.type = "text";

        // pre-fill the second <input> element with the value of this.xVelocity
        this.velocityInput.value = this.xVelocity;

        // give the input field an ID based on the box name
        this.velocityInput.id = this.name + "Velocity";

        // append the second <input> element to the second <p> element
        velocityLabel.appendChild(this.velocityInput);

        // create the <span> element containing the units for the velocity input
        var velocityUnits = document.createElement("span");
        velocityUnits.innerHTML = " m/s";

        // append the units <span> element to the velocity <p> element
        velocityLabel.appendChild(velocityUnits);

        // append all the elements to the parent <p> element
        inputGroup.appendChild(name);
        inputGroup.appendChild(massLabel);
        inputGroup.appendChild(velocityLabel);

        // get the element with id "userInputWrapper"
        var userInputWrapper = document.getElementById("userInputWrapper");

        // append the parent <p> element to the "userInputWrapper" element
        userInputWrapper.appendChild(inputGroup);

    }

    getUserInput = () => {
        // get the value of the mass input field
        const mass = parseFloat(document.getElementById(this.name + "Mass").value);

        // get the value of the velocity input field
        const velocity = parseFloat(document.getElementById(this.name + "Velocity").value);

        // save the user input values to this.mass and this.xVelocity
        this.mass = mass;
        this.xVelocity = velocity;
    }

    setUserInput = () => {
        this.massInput.value = this.mass.toFixed(2)
        this.velocityInput.value = this.xVelocity.toFixed(2)
    }

    update = () => {
        this.setUserInput()
        this.draw()
        this.floatingText()
    }
}