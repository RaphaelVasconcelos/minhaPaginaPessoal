import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
  Avatar,
  Center,
  VStack,
} from "@chakra-ui/react";
import PlacementExample from "../components/Drawer";

export default function Home() {
  const today = new Date();
  const startYear = today.getFullYear() - 2009;

  return (
    <div>
      <Head>
        <title>Raphael Vasconcelos</title>
        <meta name="description" content="Raphael Vasconcelos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Box align="right">
            <PlacementExample />
          </Box>
          <VStack>
            <Avatar
              name="Raphael Vasconcelos"
              size="2xl"
              src="../../perfil.jpg"
            />

            <Heading as="h1" mb={2}>
              Bem-vindo(a) a minha página!
            </Heading>
            <Heading as="h2" size="md" mb={6}>
              Criei essa página para por em prática o que aprendi de
              NextJs/React e ser um caminho para me conhecerem como
              profissional.
            </Heading>
          </VStack>

          <Heading size="md" my={6}>
            Formação
          </Heading>
          <Tabs colorScheme="purple">
            <TabList>
              <Tab>Bacharel em Ciência da Computação</Tab>
              <Tab>
                Pós Graduação em Ciência de Dados, Arquitetura de Software e
                Cybersecurity
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  Formado na Universidade Unipli/Anhanguera de Niterói-RJ em
                  2014.
                </p>
              </TabPanel>
              <TabPanel>
                <p>Cursando atualmente pela PUC-PR.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Heading size="md" my={6}>
            Experiência ({startYear} anos no mercado de trabalho)
          </Heading>
          <Tabs colorScheme="purple">
            <TabList>
              <Tab>Grupo Soma (Atual emprego desde 2019) </Tab>
              <Tab>Visagio (4 anos)</Tab>
              <Tab>B2W / Ideais (4 anos)</Tab>
              <Tab>Hospedanit (2 anos)</Tab>
              <Tab>UFF (1 ano)</Tab>
              <Tab>Locadora (3 meses)</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>
                  No Grupo Soma sou líder técnico do Portal de Chamados da
                  empresa. Lidero o time de suporte e de novas demandas.
                  Apoiamos basicamente todas as áreas da empresa com novos
                  fluxos de atendimento ou refatoração de fluxos existentes.
                  Além disso também gero bases de dados para analistas de suas
                  áreas realizarem seus relátorios.
                </p>
                <p>
                  Tecnologias: RUBY on Rails, REDMINE, MYSQL Database, POSTGRES
                  Database, AWS Services
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Na Visagio o formato de trabalho mudou para o conceito de
                  consultoria. Aprendi a desenvolver do zero em Ruby e minhas
                  principais atividades eram suportar e implementar novos
                  Portais de chamados (Redmine) em diversos clientes. Aprendi a
                  fazer gestão de clientes, operação de suporte em aplicações.
                  Em alguns projetos também aprendi o conceito de RPA utilizando
                  Sikuli e UIPath.
                </p>
                <p>
                  Tecnologias: RUBY on Rails, REDMINE, MYSQL Database, POSTGRES
                  Database, AWS Services, Sikuli, UIPath
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  A Ideais foi meu primeiro estágio com desenvolvimento de
                  código (JAVA), minha base de programação e boas práticas foram
                  aprendidas nessa época. Também aprendi metodologias ágeis,
                  integração contínua, a importancia dos testes e refatoração do
                  código em busca de performance.
                </p>
                <p>
                  Tecnologias: JAVA, SElenium Tests, AWS Services, SOLR
                  Database, MongoDB Database
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Na Hospedanit tive a oportunidade de desenvolver meus
                  primeiros sites. Na época era tudo em tables ainda, porém um
                  grande destaque desta época foi quando me aperfeiçoava,
                  descobri que a maneira certa de se fazer fazer era em
                  tableless. Além de ter que aprender esse novo jeito, tive que
                  convencer a meus chefes a adotarem essa forma como padrão da
                  empresa.
                </p>
                <p>Tecnologias: HTML, CSS, PHP</p>
              </TabPanel>
              <TabPanel>
                <p>
                  Trabalhei com a manutenção de páginas da UFF. Atualizava o
                  conteudo, editava imagens e etc. Um dos meus primeiros
                  contatos com a área.
                </p>
                <p>Tecnologias: HTML, CSS, Edição de imagens com Photoshop</p>
              </TabPanel>
              <TabPanel>
                <p>
                  Meu primeiro emprego foi em uma locadora. Primeiro contato com
                  atendimento ao cliente. Ver filmes para poder recomendar e
                  gestão do caixa.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Heading size="md" my={6}>
            Cursos
          </Heading>
          <Tabs colorScheme="purple">
            <TabList>
              <Tab>React</Tab>
              <Tab>Flutter</Tab>
              <Tab>Docker</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <a href="https://app.rocketseat.com.br/api/certificates/pdf/599c23ba-438a-4599-b7dd-13fdb11082a3">
                  Certificado de conclusão do curso Ignite da Rocketseat
                </a>
              </TabPanel>
              <TabPanel>
                <UnorderedList>
                  <ListItem>
                    <a href="https://balta.io/certificados/eec4bb50-f246-4378-a00c-590fa1b5d19c">
                      Flutter Apps: IMC com Material, Cupertino e BLoC na
                      plataforma Balta.io
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://balta.io/certificados/a00685f1-0be2-4260-8daf-aad2a3f2129f">
                      Criando Apps nativas escaláveis com Flutter, BloC e
                      Provider na plataforma Balta.io
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://balta.io/certificados/2e4451a1-3685-4f5e-876d-6645938142e6">
                      Todo App: Mobile com Flutter, MobX e Firebase na
                      plataforma Balta.io
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://balta.io/certificados/4d4c258c-cb12-4485-8632-78633e8d5c8c">
                      Dominando Layouts no Flutter na plataforma Balta.io
                    </a>
                  </ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <a href="https://www.udemy.com/certificate/UC-3YREUVJQ/">
                  Certificado de conclusão do curso Docker: Ferramenta essencial
                  para Desenvolvedores
                </a>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
}
