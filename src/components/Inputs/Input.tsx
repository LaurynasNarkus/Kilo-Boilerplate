import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";

type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file"
	| "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search"
	| "submit" | "tel" | "text" | "time" | "url" | "week";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	errorMesage?: string;
	minValue?: number;
	maxValue?: number;
	onChange?: () => void;
	placeholder?: string;
	required?: any;
	style?: any;
	type?: InputType;
	value?: string | number;
}

export const Input = styled(Box).attrs({ as: "input" })<InputProps>``;