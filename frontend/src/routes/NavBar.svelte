<script>
    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      HeaderNavMenu,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
  
    let isSideNavOpen = true;
  </script>
  
  <Header company="GEC" platformName="Campus Management System" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="" />
      <HeaderNavItem href="#/teacher" text="Teacher" />
      <HeaderNavItem href="#/student" text="Student" />
      <!-- <HeaderNavMenu text="Menu">
        <HeaderNavItem href="/" text="Link 1" />
        <HeaderNavItem href="/" text="Link 2" />
        <HeaderNavItem href="/" text="Link 3" />
      </HeaderNavMenu> -->
    </HeaderNav>
  </Header>
  
  <Content>
    <Grid>
      <Row>
        <Column>
          <!-- <h1>Welcome</h1> -->
        </Column>
      </Row>
    </Grid>
  </Content>
  