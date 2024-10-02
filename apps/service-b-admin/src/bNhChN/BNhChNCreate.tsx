import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const BNhChNCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="postId" source="postId" />
        <NumberInput step={1} label="voteCount" source="voteCount" />
      </SimpleForm>
    </Create>
  );
};
