<Grid
        templateColumns='repeat(8, 1fr)'
        gap={4}
        mb={5}
      >
        <GridItem colSpan={3}>
          Тип
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.release }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Епізоди
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.episodes }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Джерело
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.source }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Сезон
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.season } { data.year }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Рейтинг
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.rating }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Статус
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.status }
          </Text>
        </GridItem>
      </Grid>