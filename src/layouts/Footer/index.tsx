import { FadeInWithStagger } from "@/components/FadeIn";
import { LinksNav } from "@/components/LinksNav";

export function Footer() {
  return (
    <footer>
      <FadeInWithStagger>
        <div className="mx-auto max-w-6xl px-8 sm:px-16">
          <div className="flex flex-col border-t border-border pb-16 pt-8 md:pb-10">
            <div className="w-full flex justify-center md:justify-start">
              <LinksNav activeClassName="font-medium text-primary" />
            </div>
            <p className="mt-16 text-xs text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} Shin Takemura
            </p>
          </div>
        </div>
      </FadeInWithStagger>
    </footer>
  );
}
