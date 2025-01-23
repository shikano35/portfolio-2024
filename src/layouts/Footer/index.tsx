import { Border } from "@/components/Border";
import { FadeIn, FadeInWithStagger } from "@/components/FadeIn";
import { LinksNav } from "@/components/LinksNav";
import { Container } from "@/components/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Border className="flex flex-col mt-16" />
        <FadeInWithStagger>
          <div className="flex justify-center md:justify-start pb-16 pt-8 md:pb-10">
            <LinksNav activeClassName="font-medium text-primary" />
          </div>
          <FadeIn className="mb-12 md:mt-8 text-xs text-muted-foreground text-center">
            &copy; {currentYear} Shin Takemura
          </FadeIn>
        </FadeInWithStagger>
      </Container>
    </footer>
  );
}
