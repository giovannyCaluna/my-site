import { Stack, StackProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const StyledDiv = styled("div")(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 40,
  paddingRight: theme.insets.page.horizontal * 8,
  paddingLeft: theme.insets.page.horizontal * 8,
}));

type SegmentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  stack?: { props?: StackProps };
};

export function Segment(props: SegmentProps) {
  const { stack, children, ...rest } = props;

  return (
    <StyledDiv {...rest} style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        style={{
          maxWidth: 1600,
          width: "100%",
        }}
        {...stack?.props}
      >
        {children}
      </Stack>
    </StyledDiv>
  );
}

const StyledSegment = styled(Segment)();

export default StyledSegment;
