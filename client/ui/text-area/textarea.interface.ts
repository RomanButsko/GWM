import { IFieldProps } from "./../field/field.interface";
import { TextareaHTMLAttributes } from "react";

type TextAreaField = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps;

export interface ITextArea extends TextAreaField {}
