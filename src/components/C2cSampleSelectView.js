import React from "react";
import reactDom from "react-dom";
import {
  Paper,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import c2csamples, { ids, C2CSample } from "../models/c2csamples";
import { useSelector, useDispatch } from "react-redux";
import { setSelectingId, selectC2csampleState } from "../states/c2csampleSlice";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
const C2cSampleItem = (id, selected, onClick) => {
  const c2csample = c2csamples[id];
  const formulaMarkdown = "$" + c2csample.formula + "$";
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton
        selected={selected}
        onClick={() => onClick(id)}
        sx={{ height: 40 }}
      >
        <ReactMarkdown
          children={formulaMarkdown}
          rehypePlugins={[rehypeKatex]}
          remarkPlugins={[remarkMath]}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((s) => selectC2csampleState(s).selectingId);
  const onClick = (id) => {
    dispatch(setSelectingId(id));
  };
  return (
    <Stack p={2} spacing={1}>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          overflow: "auto",
          maxHeight: 200,
        }}
      >
        {ids.map((id) => C2cSampleItem(id, id == selectedId, onClick))}
      </List>
    </Stack>
  );
};
