import { BackgroundImage } from "@mantine/core";
import { Text, Paper, Title, Box } from "@mantine/core";
import table from "../image/机.jpeg"

const Result = () => {
  return (
    <Box mx="auto">
      <BackgroundImage src={table} radius="xs" sx={{
        backgroundSize: "cover"        
      }}
      px={20}      
      mih={"100vh"}
      >
        <div className="mb-4">
            <Title order={2}>原稿</Title>
        </div>
        <div className="mt-48s">
        <Paper shadow="xs" radius="xs" p="xl" withBorder>
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background
            with shadow
          </Text>
        </Paper>
        </div>
      </BackgroundImage>
    </Box>
  );
};

export default Result;
