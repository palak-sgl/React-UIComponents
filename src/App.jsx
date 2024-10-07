import { useState } from "react";
import Label from "./components/UI/Label";
import Textarea from "./components/UI/Textarea";
import Badge from "./components/UI/Badge";
import Select from "./components/UI/Select";
import Tooltip from "./components/UI/Tooltip";
import Radio from "./components/UI/Radio";
import Button from "./components/UI/Button";
import Checkbox from "./components/UI/Checkbox";
import DatePicker from "./components/UI/DatePicker";
import Progress from "./components/UI/Progress";
import Accordion from "./components/UI/Accordion";
import Card from "./components/UI/Card";

function App() {
  // const [isOn, setIsOn] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [gender, setGender] = useState("male");
  const [selectedDate, setSelectedDate] = useState("");
  const [progressValue, setProgressValue] = useState(30);
  // const handleCheckboxChange = () => setChecked(!checked);
  // const handleRadioChange = (e) => setGender(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-gray-200 rounded-lg shadow-lg flex flex-col space-y-6 w-80">
        {/* Badge Component */}
        <Badge label="badge 1" color={"red"} />
        <Badge label="badge 2" color={"yellow"} />
        <Badge label="badge 2" color={"transparent"} />

        {/* Card Component */}
        <div>
          <Card
            title="Card Title"
            titleColor="red"
            contentColor="blue"
            content="This is the card content."
          />
        </div>
        <div>
          <Card
            title="Card Title"
            titleColor="yellow"
            content="This is the card content."
          />
        </div>

        {/* Tooltip with Button */}
        <div>
          <Tooltip text="This is a tooltip" color={"black"}>
            <Button label="Hover for tooltip!" color={"white"} />
          </Tooltip>
        </div>
        <div>
          <Tooltip text="This is a tooltip" color={"white"}>
            <Button label="Hover for tooltip!" color={"black"} />
          </Tooltip>
        </div>
        <div>
          <Tooltip text="This is a tooltip" color={"gray"}>
            <Button label="Hover for tooltip!" color={"blue"} />
          </Tooltip>
        </div>

        {/* Select Component */}
        <div>
          <Label someLabel="Select a fruit" />
          <Select
            options={[
              { label: "Apple", value: "1" },
              { label: "Banana", value: "2" },
            ]}
          />
        </div>

        {/* Textarea Component */}
        <div>
          <Label someLabel="Textarea" />
          <Textarea placeholder="Enter some text..." />
        </div>

        {/* Radio Component */}
        <div>
          <Label someLabel="Gender" />
          <Radio
            name="gender"
            label="Male"
            // checked={gender === "male"}
            // onChange={handleRadioChange}
            value="male"
          />
          <Radio
            name="gender"
            label="Female"
            // checked={gender === "female"}
            // onChange={handleRadioChange}
            value="female"
          />
        </div>

        {/* Checkbox Component */}
        <div>
          <Checkbox label="I agree to the terms" />
        </div>

        {/* Date Picker */}
        <div>
          <Label someLabel="Select Date" />
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>

        {/* Progress Component */}
        <div>
          <Label someLabel="Progress" />
          <Progress value={progressValue} />
        </div>

        {/* Accordion Component */}
        <div>
          <Accordion
            title="Accordion Title"
            content="This is the accordion content"
          />
        </div>

        {/* Button */}
        <Button
          label="Submit"
          color="black"
          onClick={() => alert("Submitted!")}
        />
        <Button
          label="Submit"
          color="white"
          onClick={() => alert("Submitted!")}
        />
        <Button
          label="Submit"
          color="blue"
          onClick={() => alert("Submitted!")}
        />
      </div>
    </div>
  );
}

export default App;
