import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const languages = [
  {
    name: "arkar",
    year: 1972
  },
  {
    name: "Elm",
    year: 2012
  }
];
function AutoSuggestComponent() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(() => getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "search your data",
    value,
    onChange: onChange
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div className="p-3  border border-1">{suggestion.name}</div>
  );
  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          container: "m-2",
          input: "p-2 bg-gray-300 w-full"
        }}
      />
    </div>
  );
}
export default AutoSuggestComponent;
