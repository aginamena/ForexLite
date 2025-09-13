// Heatmap.js
import { Box, Typography } from "@mui/material";

// Sample heatmap data (Y rows × X columns)
const heatmapData = [
  [10, 30, 50, 70],
  [20, 40, 60, 80],
  [15, 35, 55, 75],
  [15, 35, 55, 75],
];

// Labels
const xLabels = ["Q1", "Q2", "Q3", "Q4"];
const yLabels = ["Product A", "Product B", "Product C", "Product D"];

// Color scale helper
const getCellColor = (value) => {
  // You can make this more complex based on your needs
  if (value < 20) return "#e0f7fa";
  if (value < 40) return "#80deea";
  if (value < 60) return "#26c6da";
  if (value < 80) return "#00acc1";
  return "#00838f";
};

export default function Map() {
  return (
    <Box sx={{ overflowX: "auto", padding: 2 }}>
      {/* X-axis labels */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "80px" }} /> {/* Spacer for Y-axis */}
        {xLabels.map((label, i) => (
          <Box key={i} sx={{ width: 80, textAlign: "center" }}>
            <Typography variant="body2" fontWeight="bold">
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Heatmap grid */}
      {heatmapData.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex", alignItems: "center" }}>
          {/* Y-axis label */}
          <Box sx={{ width: "80px", textAlign: "right", pr: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              {yLabels[rowIndex]}
            </Typography>
          </Box>

          {/* Row values */}
          {row.map((value, colIndex) => (
            <Box
              key={colIndex}
              sx={{
                width: 80,
                height: 40,
                backgroundColor: getCellColor(value),
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2">{value}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
