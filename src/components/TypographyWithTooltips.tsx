import * as React from 'react';
import { Popover, Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

function MouseHoverPopover({
  text,
  children
}: {
  text: string
  children: React.ReactNode
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <span>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        component="span"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          textDecoration: 'underline dashed',
          textDecorationThickness: '1px',
          textUnderlineOffset: '4px'
        }}
        variant="inherit"
      >
        { text }
      </Typography>
       <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{ children }</Typography>
      </Popover>
    </span>
  );
}

export default function TypographyWithTooltips ({
  children,
  ...props
}: {
  children: React.ReactNode
} & TypographyProps & React.HTMLAttributes<HTMLElement>) {
  const mappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return <Typography component="span">{child}</Typography>;
    }

    const text = ['string', 'number'].includes(typeof child)
      ? String(child)
      : '';

    const groupRegex = /#([^*]+)\*([^#]+)#/g;


    const groupTexts: string[][] = [];
    const nonGroupTexts: string[] = [];

    let lastPosition = 0;
    let matchResult;

    while ((matchResult = groupRegex.exec(text)) !== null) {
      const nonGroupPart = text.slice(lastPosition, matchResult.index);
      if (nonGroupPart) {
        nonGroupTexts.push(nonGroupPart);
      }

      groupTexts.push([matchResult[1], matchResult[2]]);

      lastPosition = groupRegex.lastIndex;
    }

    const lastNonGroupPart = text.slice(lastPosition);
    if (lastNonGroupPart) {
      nonGroupTexts.push(lastNonGroupPart);
    }

    if (groupTexts.length > 0) {
      return (
        <span>
          {nonGroupTexts.map((nonGroupText, i) => (
            <Typography key={i} component="span" {...props}>
              {nonGroupText}
              <MouseHoverPopover text={groupTexts[i]?.[0] ?? ''}>
                {groupTexts[i]?.[1] ?? ''}
              </MouseHoverPopover>
            </Typography>
          ))}
        </span>
      )
    } else {
      return (
        <Typography component="span" {...props}>
          {child}
        </Typography>
      )
    }
  })

  return <span>{mappedChildren}</span>;
}
