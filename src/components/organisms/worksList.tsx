import { useState } from "react";
import { Box, Input, Flex, Button } from "@chakra-ui/react";
import WorkCard from "../atoms/workCard";
import { WorkContent } from "../../domains/type";

type WorkListProps = {
  contents: WorkContent[];
};

const WorkList: React.FC<WorkListProps> = ({ contents }) => {
  const [filteredContents, setFilteredContents] = useState(contents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const uniqueTags = Array.from(
    new Set(contents.flatMap((content) => content.tag))
  );

  const handleSearch = (
    search: string = searchTerm,
    tagToFilter: string | null = selectedTag
  ) => {
    setFilteredContents(
      contents.filter(
        (content) =>
          content.title.includes(search) &&
          (tagToFilter ? content.tag.some((t) => t === tagToFilter) : true)
      )
    );
  };

  return (
    <Box>
      <Flex mb={4}>
        <Input
          placeholder="タイトルを検索"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value, selectedTag);
          }}
        />
      </Flex>

      <Flex mb={4} wrap="wrap">
        {uniqueTags.map((tag) => (
          <Button
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              handleSearch(searchTerm, tag);
            }}
          >
            {tag}
          </Button>
        ))}

        <Button
          ml={2}
          onClick={() => {
            setSelectedTag(null);
            handleSearch(searchTerm, null);
          }}
        >
          リセット
        </Button>
      </Flex>

      <Flex mb={4} wrap="wrap" flexDirection="row">
        {filteredContents.map((content) => (
          <WorkCard key={content.id} content={content} />
        ))}
      </Flex>
    </Box>
  );
};

export default WorkList;
