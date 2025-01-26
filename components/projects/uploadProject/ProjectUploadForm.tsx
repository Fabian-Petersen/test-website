"use client";
import React from "react";
import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";
import Button from "../../features/Button";
import mySkillsData from "@/public/data/mySkillsData";

import FormRowInput from "@/components/features/forms/FormRowInput";
import FormRowSelect from "@/components/features/forms/FormRowSelect";
import FormRowTextArea from "@/components/features/forms/FormRowTextArea";

// $ Import the custom hook to collect the project form data
import useHandleSubmitProjects from "@/app/customHooks/useHandleSubmitProjects";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

// Create new array of all the skills from the mySkillsData
const skills = mySkillsData.map((skill) => skill.language);

const ProjectUploadForm = () => {
  const { handleSubmit } = useHandleSubmitProjects();
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 max-w-4xl w-full bg-white dark:bg-formColorDark rounded-md p-6 mx-auto shadow-md border border-gray-800"
    >
      <AuthPageHeading title="Upload New Project" />
      <div className="grid sm:grid-cols-2 gap-6">
        <FormRowInput
          name="projectTitle"
          type="text"
          placeholderText="project Title"
          labelText="Project Title"
          onChange={() => {}}
        />
        <FormRowInput
          name="description"
          onChange={() => {}}
          type="text"
          placeholderText="description"
          labelText="description"
        />
        <FormRowInput
          name="aim"
          type="text"
          placeholderText="Project Aim"
          labelText="Project Aim"
          onChange={() => {}}
        />
        <FormRowSelect
          name="typeOfProject"
          multiple={false}
          options={["Front End", "Back End", "Cloud Engineering"]}
          labelText="Project Type"
          onChange={() => {}}
        />
        {/* Change multiple to true once the data received from database */}

        <FormRowSelect
          name="projectStack"
          multiple={true}
          options={skills}
          onChange={(selectedValues) => {
            console.log(selectedValues);
          }}
          labelText="Project Stack"
        />

        <FormRowInput
          name="websiteLink"
          onChange={() => {}}
          type="text"
          placeholderText="Website URL"
          labelText="Website URL"
        />
        <FormRowInput
          name="githubLink"
          onChange={() => {}}
          type="text"
          placeholderText="Github Repository"
          labelText="Github Repository"
        />
        <FormRowTextArea
          name="projectDetails"
          labelText="Detailed Description"
          placeholderText="Detailed Description"
          className="col-span-full"
          row={5}
          onChange={() => {}}
        />
        <FormRowTextArea
          name="challenges"
          labelText="challenges"
          placeholderText="project challenges"
          className="col-span-full"
          row={5}
          onChange={() => {}}
        />
        <FormRowInput
          name="image"
          type="file"
          labelText="Add a Image"
          placeholderText="image"
          className="col-span-full border border-gray-800"
          onChange={() => {}}
        />
      </div>

      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded tracking-wider uppercase"
        buttonLabel="Submit Form"
      />
    </form>
  );
};

export default ProjectUploadForm;
