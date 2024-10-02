import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BNhChNEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="postId" source="postId" />
        <NumberInput step={1} label="voteCount" source="voteCount" />
      </SimpleForm>
    </Edit>
  );
};
