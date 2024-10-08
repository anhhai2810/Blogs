import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const BNhChNShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postId" source="postId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voteCount" source="voteCount" />
      </SimpleShowLayout>
    </Show>
  );
};
